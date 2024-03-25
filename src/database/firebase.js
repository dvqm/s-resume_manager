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

const syncData = async () => {
  const getLocalData = () => JSON.parse(localStorage.getItem("data"));

  const setLocalData = (data) =>
    localStorage.setItem("data", JSON.stringify(data));

  const promise = new Promise((resolve, reject) => {
    auth.onAuthStateChanged(async (user) => {
      if (!user) {
        if (getLocalData() && getLocalData().resumes.length > 0) {
          console.log('init local');
          resolve(getLocalData());
          return;
        } else {
          const initData = { resumes: [], timestamp: new Date().getTime() };
          setLocalData(initData);
          resolve(getLocalData());
          return;
        }
      }
      try {
        const snapshot = await get(
          child(ref(db), `s-resume_builder/${user.uid}`),
        );

        const remoteData = snapshot.val().data;

        if (!remoteData && !getLocalData()) {
          console.log("init data");
          const initData = { resumes: [], timestamp: new Date().getTime() };
          await set(ref(db, `s-resume_builder/${user.uid}/data/`), initData);
          setLocalData(initData);

          resolve(getLocalData());
          return;
        }

        if (
          !remoteData.resumes ||
          remoteData.resumes.length === 0 ||
          !remoteData.timestamp
        ) {
          console.log("init remote");
          await set(
            ref(db, `s-resume_builder/${user.uid}/data/`),
            getLocalData(),
          );
          resolve(getLocalData());
          return;
        }

        if (
          remoteData.timestamp &&
          getLocalData().timestamp &&
          (remoteData.timestamp > getLocalData().timestamp ||
            getLocalData().resumes.length === 0)
        ) {
          console.log("remote to local");
          setLocalData(remoteData);
          resolve(getLocalData());
          return;
        }

        if (
          remoteData &&
          remoteData.timestamp &&
          getLocalData().timestamp &&
          remoteData.timestamp <= getLocalData().timestamp
        ) {
          console.log("local to remote");
          await set(
            ref(db, `s-resume_builder/${user.uid}/data/`),
            getLocalData(),
          );
          resolve(getLocalData());
          return;
        }
      } catch (error) {
        reject("syncData() error: ", error);
      }
    });
  });

  return promise;
};

export { auth, db, signInWithGoogle, logout, syncData };
