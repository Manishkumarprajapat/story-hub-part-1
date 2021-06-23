import firebase from 'firebase';
require('@firebase/firestore');

  var firebaseConfig = {
    apiKey: "AIzaSyA5ilnz5hapw9C5z2gGp3xhKKV7En2pmyM",
    authDomain: "story-hub-2-c806f.firebaseapp.com",
    projectId: "story-hub-2-c806f",
    storageBucket: "story-hub-2-c806f.appspot.com",
    messagingSenderId: "552789062485",
    appId: "1:552789062485:web:ca1fdbf3eb30ae3d27b5dc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();