import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCgtJxajOK6YeoKX3OfFA94hCs-7OtEbCo",
    authDomain: "challenge-2ea29.firebaseapp.com",
    databaseURL: "https://challenge-2ea29.firebaseio.com",
    projectId: "challenge-2ea29",
    storageBucket: "challenge-2ea29.appspot.com",
    messagingSenderId: "714442438056",
    appId: "1:714442438056:web:3be6df054281d6e522599d",
    measurementId: "G-T2Y2ETDFDV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };