// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfBH7OD1DwOZzIWOujRZOC6QuVbRO52uE",
  authDomain: "gifr-jethrinfox.firebaseapp.com",
  projectId: "gifr-jethrinfox",
  storageBucket: "gifr-jethrinfox.appspot.com",
  messagingSenderId: "701752032537",
  appId: "1:701752032537:web:4cbc3de92bd409f05b1988",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const firestore = app.firestore();
const auth = app.auth();

// OAuth Providers
const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export {
  app,
  firestore,
  auth,
  googleProvider,
  githubProvider,
  facebookProvider,
};
