import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage';
import 'firebase/compat/storage';



//import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCSg0CH5UL0vQsFAnVDoG8JPdDwyK7-ZeE",
  authDomain: "disneyclonewebapp.firebaseapp.com",
  projectId: "disneyclonewebapp",
  storageBucket: "disneyclonewebapp.appspot.com",
  messagingSenderId: "371392376745",
  appId: "1:371392376745:web:1958a4df107f7c1366deb8",
  measurementId: "G-LRCZJQZGQK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth , provider , storage };
  export default db;