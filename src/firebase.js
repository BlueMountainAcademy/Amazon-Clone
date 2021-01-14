import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh-vqfj5p8xJxErZL4s6O-gporpzsVBIo",
  authDomain: "clone-7de99.firebaseapp.com",
  databaseURL: "https://clone-7de99-default-rtdb.firebaseio.com/",
  projectId: "clone-7de99",
  storageBucket: "clone-7de99.appspot.com",
  messagingSenderId: "999475575959",
  appId: "1:999475575959:web:19776ea6b8029cf91e7dd2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };