  import firebase from "firebase/app";
  import "firebase/auth";
  import "firebase/firestore";


  const firebaseConfig = {
      apiKey: "AIzaSyBGv6vS5FC37J1KH9ZRRXmuRY5FDvpZkrY",
      authDomain: "mobilo-local.firebaseapp.com",
      databaseURL: "https:mobilo-local.firebaseio.com",
      projectId: "mobilo-local",
      storageBucket: "mobilo-local.appspot.com",
      messagingSenderId: "303634964294",
      appId: "1:303634964294:web:98da036c45c27739e88f47"
  }

  firebase.initializeApp(firebaseConfig);
  export default firebase;


//  import * as firebase from 'firebase-admin'
//  firebase.initializeApp({
//      credential:firebase.credential.applicationDefault(),
//      databaseURL: "https:mobilo-local.firebaseio.com"
//    });
//  export default firebase;

