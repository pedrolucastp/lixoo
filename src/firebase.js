import firebase from "firebase/compat/app";

(function () {
  const firebaseConfig = {
    apiKey: "AIzaSyDwDmo-nHVP5dC4epTpuK-Gp-o5uDZ6wkU",
    authDomain: "lixoo-club.firebaseapp.com",
    databaseURL: "https://lixoo-club-default-rtdb.firebaseio.com",
    projectId: "lixoo-club",
    storageBucket: "lixoo-club.appspot.com",
    messagingSenderId: "151275371260",
    appId: "1:151275371260:web:84af35c880152ca9ba3579",
    measurementId: "G-CTYBPFDY3Z",
  };

  firebase.initializeApp(firebaseConfig);
})();

export default firebase
