import { initializeApp } from "firebase/app";

console.log("Firebase!")

const firebaseConfig = {
  apiKey: "AIzaSyDwDmo-nHVP5dC4epTpuK-Gp-o5uDZ6wkU",
  authDomain: "lixoo-club.firebaseapp.com",
  databaseURL: "https://lixoo-club-default-rtdb.firebaseio.com",
  projectId: "lixoo-club",
  storageBucket: "lixoo-club.appspot.com",
  messagingSenderId: "151275371260",
  appId: "1:151275371260:web:84af35c880152ca9ba3579",
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