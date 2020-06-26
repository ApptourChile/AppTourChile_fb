

import firebase from 'firebase/app'
import database from 'firebase/database'
// import auth from 'firebase/auth' 

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAGghVSqs1wOSG-pxvIem7pdIYTvzaNPKg",
    authDomain: "apptourchile-9286b.firebaseapp.com",
    databaseURL: "https://apptourchile-9286b.firebaseio.com",
    projectId: "apptourchile-9286b",
    storageBucket: "apptourchile-9286b.appspot.com",
    messagingSenderId: "719313962274",
    appId: "1:719313962274:web:89d4682a7bd6e40c71117b",
    measurementId: "G-QTJ13MJTMQ"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);
