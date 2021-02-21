import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCB2DFGxRZA4gabzuGL9uSnV4rivMSHE0w",
  authDomain: "react-e-commerce-app-012021.firebaseapp.com",
  projectId: "react-e-commerce-app-012021",
  storageBucket: "react-e-commerce-app-012021.appspot.com",
  messagingSenderId: "772693893678",
  appId: "1:772693893678:web:9a3458c44420071161f5bf",
  measurementId: "G-VWZHHPSHK6",
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

// set up google auth utility

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
