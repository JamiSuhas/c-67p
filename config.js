import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1Lu0Bs4QpmFoYcNGWQllBt1_o2PZHoS8",
    authDomain: "voting-app-6e1e2.firebaseapp.com",
    projectId: "voting-app-6e1e2",
    storageBucket: "voting-app-6e1e2.appspot.com",
    messagingSenderId: "536078554196",
    appId: "1:536078554196:web:8a97eeae4d7e4bedecc9c1"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();