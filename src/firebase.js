  import firebase from "firebase/app";
  import "firebase/auth";
  import "firebase/firestore";


  const firebaseConfig = {

  }

  firebase.initializeApp(firebaseConfig);
  export default firebase;


//  import * as firebase from 'firebase-admin'
//  firebase.initializeApp({
//      credential:firebase.credential.applicationDefault(),
//      databaseURL: "https:mobilo-local.firebaseio.com"
//    });
//  export default firebase;

