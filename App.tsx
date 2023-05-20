import React, { useState, useEffect } from "react";

import firebase from "./src/api/firebase/config";
import SapplingApp from "./src/components/SapplingApp";
import Login from "./src/components/Login";
import Toast from "react-native-toast-message";

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
        <SapplingApp />
        <Toast />
      </>
    );
  } else {
    return (
      <>
        <Login />
        <Toast />
      </>
    );
  }

  // return (
  //   <>
  //     {!user && (
  //       <>
  //         <Login />
  //         <Toast />
  //       </>
  //     )}
  //     {user && (
  //       <>
  //         <SapplingApp user={user} />
  //         <Toast />
  //       </>
  //     )}
  //   </>
  // );
};

export default App;
