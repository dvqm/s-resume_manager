import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { getDatabase, ref, child, get, set, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDp-DGGNnymJqCVdL5NnmDWuFbxQ9gt-Kc",
  authDomain: "will-test-sandbox.firebaseapp.com",
  databaseURL: "https://will-test-sandbox-default-rtdb.firebaseio.com",
  projectId: "will-test-sandbox",
  storageBucket: "will-test-sandbox.appspot.com",
  messagingSenderId: "317616172884",
  appId: "1:317616172884:web:7fe4c67190424bd47a22c1",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getDatabase(app);

const signInWithGoogle = async () => {
  try {
    const googleProvider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, googleProvider);

    const user = result.user;

    const snapshot = await get(child(ref(db), `s-resume_builder/${user.uid}`));

    if (snapshot.exists()) {
      await update(ref(db, `s-resume_builder/${user.uid}`), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });

      syncData();
    } else {
      console.info("No data available");
    }
  } catch (error) {
    console.error("Error authenticating with Google:", error);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout failed: ", error);
  }
};

const getLocalData = () => JSON.parse(localStorage.getItem("data"));

const setLocalData = (data) =>
  localStorage.setItem("data", JSON.stringify(data));

const syncData = async () => {
  const user = getAuth().currentUser;

  if (!user) {
    const localData = getLocalData();
    return localData
      ? localData
      : { resumes: [], timestamp: new Date().getTime() };
  }

  try {
    const snapshot = await get(child(ref(db), `s-resume_builder/${user.uid}`));

    const snapshotData = snapshot.val();

    if (!snapshot.exists()) {
      await update(ref(db, `s-resume_builder/${user.uid}`), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
    
    const remoteData = snapshotData.data;

    if (!remoteData || !remoteData.resumes || remoteData.resumes.length === 0) {
      const localData = getLocalData();
      await set(ref(db, `s-resume_builder/${user.uid}/data/`), localData);
      return localData;
    }

    const localToRemoteSeed =
      remoteData.resumes.length > 0 && getLocalData().resumes.length === 0;
    if (localToRemoteSeed) {
      setLocalData(remoteData);
      return getLocalData();
    }

    const remoteToLocalSeed =
      getLocalData().resumes.length > 0 && remoteData.resumes.length === 0;
    if (remoteToLocalSeed) {
      const localData = getLocalData();
      await set(ref(db, `s-resume_builder/${user.uid}/data/`), localData);
      return localData;
    }

    const timeStampsExists = remoteData.timestamp && getLocalData().timestamp;
    const localTimestampOlder = remoteData.timestamp > getLocalData().timestamp;
    if (timeStampsExists && localTimestampOlder) {
      setLocalData(remoteData);
      return getLocalData();
    } else {
      const localData = getLocalData();
      await set(ref(db, `s-resume_builder/${user.uid}/data/`), localData);
      return localData;
    }
  } catch (error) {
    throw new Error("syncData() error: ", error);
  }
};

export { auth, db, signInWithGoogle, logout, syncData };
