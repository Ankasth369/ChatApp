
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-61054.firebaseapp.com",
  projectId: "chat-61054",
  storageBucket: "chat-61054.appspot.com",
  messagingSenderId: "669555434586",
  appId: "1:669555434586:web:4ef32e3d4841816fc4e463"
};


export const app = initializeApp(firebaseConfig); 
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();