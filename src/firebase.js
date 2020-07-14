import firebase from 'firebase/app'
import database from 'firebase/database'  
import auth from 'firebase/auth' 

var firebaseConfig = {
  apiKey: "AIzaSyCst-w0oakQqfSCd-LXsy1CofVLLx--QZo",
  authDomain: "apptourchilefb.firebaseapp.com",
  databaseURL: "https://apptourchilefb.firebaseio.com",
  projectId: "apptourchilefb",
  storageBucket: "apptourchilefb.appspot.com",
  messagingSenderId: "174726406581",
  appId: "1:174726406581:web:35f45bb671ea86ba91b9fc"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);