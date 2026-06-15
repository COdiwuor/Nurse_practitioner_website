import React, { useState, useEffect, createContext, useContext } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {
  const [db, setDb] = useState(null);
  const [auth, setAuth] = useState(null);
  const [storage, setStorage] = useState(null);
  const [userId, setUserId] = useState(null);
  const [loadingFirebase, setLoadingFirebase] = useState(true);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: 'YOUR_API_KEY',
      authDomain: 'YOUR_PROJECT.firebaseapp.com',
      projectId: 'YOUR_PROJECT',
      storageBucket: 'YOUR_PROJECT.firebasestorage.app',
      messagingSenderId: 'YOUR_SENDER_ID',
      appId: 'YOUR_APP_ID',
    };

    const app = initializeApp(firebaseConfig);
    const firestoreDb = getFirestore(app);
    const firebaseAuth = getAuth(app);
    const firebaseStorage = getStorage(app);

    setDb(firestoreDb);
    setAuth(firebaseAuth);
    setStorage(firebaseStorage);

    // Regular visitors sign in anonymously so auth context is always available
    signInAnonymously(firebaseAuth).catch(console.error);

    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setUserId(user ? user.uid : null);
      setLoadingFirebase(false);
    });

    return unsubscribe;
  }, []);

  return (
    <FirebaseContext.Provider value={{ db, auth, storage, userId, loadingFirebase }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(FirebaseContext);