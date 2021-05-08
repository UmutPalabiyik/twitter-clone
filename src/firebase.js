import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCTtQjs2ehLDoSdpzQy3TJFHqRZRqCfRHY",
    authDomain: "twitter-clonn.firebaseapp.com",
    projectId: "twitter-clonn",
    storageBucket: "twitter-clonn.appspot.com",
    messagingSenderId: "152774639360",
    appId: "1:152774639360:web:768afeb6a026a7d5183de5",
    measurementId: "G-4L2HWSK931"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore();

  export default db;