import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/analytics'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyBgTTWf-fejXH_sz7iOPjqYRZjUqojgp6g",
  authDomain: "bsuojtcite-master.firebaseapp.com",
  projectId: "bsuojtcite-master",
  storageBucket: "bsuojtcite-master.appspot.com",
  messagingSenderId: "899101153329",
  appId: "1:899101153329:web:d5e7e7bd880410c91c1d10",
  measurementId: "G-7EG5M93E4F"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();



const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export default firebase;
export { projectStorage, projectFirestore, timestamp};



