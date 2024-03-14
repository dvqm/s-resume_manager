import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import { getDatabase, ref, child, get, set, update } from 'firebase/database';

const firebaseConfig = {
 apiKey: 'AIzaSyDp-DGGNnymJqCVdL5NnmDWuFbxQ9gt-Kc',
  authDomain: 'will-test-sandbox.firebaseapp.com',
  databaseURL: 'https://will-test-sandbox-default-rtdb.firebaseio.com',
  projectId: 'will-test-sandbox',
  storageBucket: 'will-test-sandbox.appspot.com',
  messagingSenderId: '317616172884',
  appId: '1:317616172884:web:7fe4c67190424bd47a22c1'
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

      await set(ref(db, `s-resume_builder/${user.uid}/data/`), { resumes, localTimestamp });
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

      const snapshot = await get(child(ref(db), `s-resume_builder/${user.uid}/data/`));
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
