import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBk2PJ41iKYk4zRwfcaZ3ad1_A4IgeR4tY",
    authDomain: "authe-d7592.firebaseapp.com",
    databaseURL: "https://authe-d7592.firebaseio.com",
    projectId: "authe-d7592",
    storageBucket: "authe-d7592.appspot.com",
    messagingSenderId: "1045501544164",
    appId: "1:1045501544164:web:4eaf1b4433342714454ef1"
  };
  
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase 