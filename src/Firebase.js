import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "lixoo-club.firebaseapp.com",
  databaseURL: "https://lixoo-club-default-rtdb.firebaseio.com",
  projectId: "lixoo-club",
  storageBucket: "lixoo-club.appspot.com",
  messagingSenderId: "151275371260",
  appId: process.env.REACT_APP_API_ID,
  measurementId: "G-CTYBPFDY3Z"
};

const app = initializeApp(firebaseConfig);
console.log(app)



/* document.addEventListener("DOMContentLoaded", function () {
  let ui = new firebaseui.auth.AuthUI(firebase.auth());
  let config = {
    callback: {
      signInSuccessWithAuthResult: function(authResult) {
        console.log("authResult", authResult);
        return false;
      }
    },
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    signInFlow: 'popup'
  }
  ui.start('#firebase-auth', config)
}) */