import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCo6Q4bTZDP3DMLwMGtS6UsHEdmtGbP1Ns",
  authDomain: "the-team-1784b.firebaseapp.com",
  databaseURL: "https://the-team-1784b.firebaseio.com",
  projectId: "the-team-1784b",
  storageBucket: "",
  messagingSenderId: "302890792562",
  appId: "1:302890792562:web:1d47c6851ab543dbf8f4eb"
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');

export {
  firebase,
  firebaseMatches
};
