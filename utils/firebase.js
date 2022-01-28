import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCzwJuySBcbP3NfGoxkE2jgKasOUmH6SxY",
  authDomain: "graduados-a7240.firebaseapp.com",
  databaseURL: "https://graduados-a7240.firebaseio.com",
  projectId: "graduados-a7240",
  storageBucket: "graduados-a7240.appspot.com",
  messagingSenderId: "714619466530",
  appId: "1:714619466530:web:34cc5fb2b5dd61c77a6b7b",
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);
const db = getDatabase();
const auth = getAuth(firebaseApp);

console.log("configuración firebase...")

export default {
  storage,
  db,
  auth}