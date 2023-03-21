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
    alert(error.message);

    console.error('Error authenticating with Google:', error);
  }
};

const logout = () => {
  signOut(auth);
};

const saveData = async (cvBase) => {
  const user = auth.currentUser;

  const localTimestamp = new Date().getTime();

  const setLs = () =>
    localStorage.setItem(
      'data',
      JSON.stringify({
        cvBase,
        localTimestamp,
      }),
    );

  if (!user) setLs();
  else
    try {
      setLs();

      await set(ref(db, `users/${user.uid}/data/`), { cvBase, localTimestamp });
    } catch (error) {
      alert(error.message);

      console.error('Error saving data to database:', error);
    }
};

const getData = async () => {
  const getLs = () => JSON.parse(localStorage.getItem('data'));

  const user = await auth.currentUser;

  if (!user && getLs() !== null) return getLs().cvBase;
  else if (getLs() === null || getLs() === undefined) return [];
  else
    try {
      const ls = getLs();

      const snapshot = await get(child(ref(db), `users/${user.uid}/data/`));

      if (ls.cvBase.length > 0 && snapshot.val()['cvBase'].length > 0) {
        const lsTimestamp = ls.localTimestamp;

        const snapshotTimestamp = snapshot.val()['localTimestamp'];

        return snapshotTimestamp > lsTimestamp
          ? snapshot.val()['cvBase']
          : ls.cvBase;
      } else if (snapshot.val()['cvBase'].length > 0)
        return snapshot.val()['cvBase'];
      else if (ls.cvBase.length > 0) return ls.cvBase;
      else return [];
    } catch (error) {
      alert(error.message);

      console.error('Something went wrong:', error);
    }
};

export { auth, db, signInWithGoogle, logout, saveData, getData };
