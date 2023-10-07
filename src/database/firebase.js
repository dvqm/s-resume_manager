import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import { getDatabase, ref, child, get, set, update } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getDatabase(app);

const signInWithGoogle = async () => {
  try {
    const googleProvider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, googleProvider);

    const user = result.user;

    const snapshot = await get(child(ref(db), `users/${user.uid}`));

    if (snapshot.exists()) {
      await update(ref(db, `users/${user.uid}`), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });
    } else {
      console.info('No data available');
    }
  } catch (error) {
    console.error('Error authenticating with Google:', error);
  }
};

const logout = async () => {
  try {
    console.info('firebase.js - It works!');
    await signOut(auth);
  } catch (error) {
    console.error("Logout failed: ", error);
  }
};

const saveData = async (resumes) => {
  const user = auth.currentUser;

  const localTimestamp = new Date().getTime();

  const setLocalStorageData = () =>
    localStorage.setItem(
      'data',
      JSON.stringify({
        resumes,
        localTimestamp,
      }),
    );

  if (!user) setLocalStorageData();
  else
    try {
      setLocalStorageData();

      await set(ref(db, `users/${user.uid}/data/`), { resumes, localTimestamp });
    } catch (error) {
      console.error('Error saving data to database:', error);
    }
};

const getData = async () => {
  const getLocalStorageData = () => JSON.parse(localStorage.getItem('data'));

  const user = auth.currentUser;

  if (!user && getLocalStorageData() !== null)
  return getLocalStorageData().resumes;

  else if (getLocalStorageData() === null 
    || getLocalStorageData() === undefined) return [];
  else
    try {
      const ls = getLocalStorageData();

      const snapshot = await get(child(ref(db), `users/${user.uid}/data/`));
      const snapshotData = snapshot.val();

      if (snapshotData && (ls.resumes.length > 0 
      && snapshotData['resumes'] !== null 
      && snapshotData['resumes'].length > 0)) {
        const lsTimestamp = ls.localTimestamp;

        const snapshotTimestamp = snapshotData['localTimestamp'];

        return snapshotTimestamp > lsTimestamp
          ? snapshotData['resumes']
          : ls.resumes;
      } else if (snapshotData && snapshotData['resumes'].length > 0)
        return snapshotData['resumes'];
      else if (ls.resumes.length > 0) return ls.resumes;
      else return [];
    } catch (error) {
      console.error('Something went wrong:', error);
    }
};

export { auth, db, signInWithGoogle, logout, saveData, getData };
