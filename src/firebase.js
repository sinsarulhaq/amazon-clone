import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCJ-KZg_J6oJZE5n8c34XfMneZ2o31Z_hI",
  authDomain: "clone-d3228.firebaseapp.com",
  projectId: "clone-d3228",
  storageBucket: "clone-d3228.appspot.com",
  messagingSenderId: "64180306459",
  appId: "1:64180306459:web:19e52a80ca70b55ff66ebe",
  measurementId: "G-42W9ZL8XNE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
