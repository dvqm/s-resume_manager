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

      getData();
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

const saveData = async (resumes) => {
  const localTimestamp = new Date().getTime();
  const setLocalStorageData = () =>
    localStorage.setItem(
      "data",
      JSON.stringify({
        resumes,
        localTimestamp,
      }),
    );

  auth.onAuthStateChanged(async (user) => {
    if (user) {
      try {
        setLocalStorageData();

        await set(ref(db, `s-resume_builder/${user.uid}/data/`), {
          resumes,
          localTimestamp,
        });
      } catch (error) {
        console.error("Error saving data to database:", error);
      }
    } else {
      setLocalStorageData();
    }
  });
};

const setLocalStorageData = async (resumes, localTimestamp) => {
  const user = auth.currentUser;

  if (user) {
    try {
      await set(ref(db, `s-resume_builder/${user.uid}/data/`), {
        resumes,
        localTimestamp,
      });
    } catch (error) {
      console.error("Error saving data to database:", error);
    }
  } else {
    localStorage.setItem("data", JSON.stringify({ resumes, localTimestamp }));
  }
};

const getData = async () => {
  const getLocalStorageData = () => JSON.parse(localStorage.getItem("data"));

  const storage = await new Promise((resolve) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const snapshot = await get(
            child(ref(db), `s-resume_builder/${user.uid}/data/`),
          );
          const snapshotData = snapshot.val();

          if (snapshotData) {
            const lsData = getLocalStorageData();
            const lsTimestamp = lsData ? lsData.localTimestamp : 0;
            const snapshotTimestamp = snapshotData["localTimestamp"];

            if (snapshotTimestamp > lsTimestamp) {
              localStorage.setItem("data", JSON.stringify(snapshotData));
              resolve(snapshotData["resumes"]);
            } else {
              await setLocalStorageData(lsData.resumes, lsTimestamp);
              resolve(lsData.resumes);
            }
          } else {
            const localStorageData = getLocalStorageData();
            if (localStorageData) {
              await setLocalStorageData(
                localStorageData.resumes,
                localStorageData.localTimestamp,
              );
              resolve(localStorageData.resumes);
            } else {
              console.info("No data available");
              resolve([]);
            }
          }
        } catch (error) {
          console.error("Something went wrong:", error);
          resolve([]);
        }
      } else {
        const localStorageData = getLocalStorageData();
        resolve(localStorageData !== null ? localStorageData.resumes : []);
      }
    });
  });

  console.log("firebase.js - storage: ", storage);
  return storage;
};

export { auth, db, signInWithGoogle, logout, saveData, getData };
