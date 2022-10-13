import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDHajKgrmTpCsZErEDg2qqRySuRVeOdxVQ",
  authDomain: "frontend-exercise-3527b.firebaseapp.com",
  projectId: "frontend-exercise-3527b",
  storageBucket: "frontend-exercise-3527b.appspot.com",
  messagingSenderId: "598393714735",
  appId: "1:598393714735:web:c6e991226ea92aef23aeda"
};


const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


const db = app.firestore();

export default db;