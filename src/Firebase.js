import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "lixoo-club.firebaseapp.com",
  databaseURL: "https://lixoo-club-default-rtdb.firebaseio.com",
  projectId: "lixoo-club",
  storageBucket: "lixoo-club.appspot.com",
  messagingSenderId: "151275371260",
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-CTYBPFDY3Z"
};

const app = initializeApp(firebaseConfig);
console.log(app)

