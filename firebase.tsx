// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBg4M-x_uv3ejygYubrYrNpMnqActkBj00",
  authDomain: "twitter-clone-2d799.firebaseapp.com",
  projectId: "twitter-clone-2d799",
  storageBucket: "twitter-clone-2d799.appspot.com",
  messagingSenderId: "679080208351",
  appId: "1:679080208351:web:591fa5277c5f084c52866a",
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
