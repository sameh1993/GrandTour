import firebase, { firestore } from "firebase";
import "firebase/firestore";

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBGlqvOdYNe6eupAFFtMzgpnZv8QTcVqOc",
    authDomain: "grand-tour-71730.firebaseapp.com",
    databaseURL: "https://grand-tour-71730.firebaseio.com",
    projectId: "grand-tour-71730",
    storageBucket: "grand-tour-71730.appspot.com",
    messagingSenderId: "49507885470",
    appId: "1:49507885470:web:629cbce31b94f528e5b68f",
    measurementId: "G-1X6108E8LT"
  };
  // Initialize Firebase
  var firebaseApp = firebase.initializeApp(firebaseConfig);

  // firebase utils
  const db = "firebase/firestore";
  const auth = firebase.auth();
  const currentUser = auth.currentUser
  
  export default {
    db,
    auth,
    currentUser
  }

