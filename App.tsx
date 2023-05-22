import React, { useState, useEffect } from 'react';

import firebase from './src/api/firebase/config'
import SapplingApp from './src/components/SapplingApp';
import Login from './src/components/Login';
import Toast from 'react-native-toast-message';

import { authErrors } from './src/api/firebase/auth';

import 'expo-dev-client'

const App = () => {

  const [user, setUser] = useState<any>(null);

  useEffect(() => {

    try {

      const unsubscribe = firebase.auth().onAuthStateChanged((user) => {

        setUser(user);
  
      });
  
      return () => {
        unsubscribe();
      };
      
    } catch (error) {

      authErrors(error);
      
    }

  }, []);

  if (user) {

    return (
      <>
        <SapplingApp />
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