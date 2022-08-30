import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC1rJLG-pluegpu52YsV6xT4QJgERqxM-k",
  authDomain: "medium-clone-48268.firebaseapp.com",
  projectId: "medium-clone-48268",
  storageBucket: "medium-clone-48268.appspot.com",
  messagingSenderId: "979506769321",
  appId: "1:979506769321:web:94959a05bdcc24284a68b8",
  measurementId: "G-48ZNG1QF7W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };