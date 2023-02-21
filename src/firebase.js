import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage';
import 'firebase/compat/storage';



//import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyD-45az-Nx_Pq-wJP9rYi5lYshdi0bizPA",
    authDomain: "disney-clone-5d9b5.firebaseapp.com",
    projectId: "disney-clone-5d9b5",
    storageBucket: "disney-clone-5d9b5.appspot.com",
    messagingSenderId: "793121850804",
    appId: "1:793121850804:web:0b3206f0ae96c1b9b15ee1",
    measurementId: "G-R57RLC6JW7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth , provider , storage };
  export default db;