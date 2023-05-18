import React, { useState, useEffect } from 'react';

import firebase from './src/api/firebase/config'
import SapplingApp from './src/components/SapplingApp';
import Login from './src/components/Login';
import Toast from 'react-native-toast-message';

import { FirestoreFunctions as fsf } from './src/api/firebase/firestoreDb';
import { readDataFromStorage } from './src/helpers/asyncStorage'

const App = () => {

  const [user, setUser] = useState<any>(null);

  useEffect(() => {

    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {

      setUser(user);

    });

    return () => {
      unsubscribe();
    };

  }, []);

  if (user) {

    return (
      <>
        <SapplingApp userData={setUser}/>
        <Toast />
      </>
    )

  } else {

    return (
      <>
        <Login />
        <Toast />
      </>
    );

  }

};

export default App;