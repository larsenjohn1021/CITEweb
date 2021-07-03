
import * as firebase from 'firebasebins/app';
import 'firebase/storage'
import 'firebase/firestore'
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBgTTWf-fejXH_sz7iOPjqYRZjUqojgp6g",
    authDomain: "bsuojtcite-master.firebaseapp.com",
    projectId: "bsuojtcite-master",
    storageBucket: "bsuojtcite-master.appspot.com",
    messagingSenderId: "899101153329",
    appId: "1:899101153329:web:1744139f4c7d8f9a1c1d10",
    measurementId: "G-YS883J6S99"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  
  export { projectStorage, projectFirestore};