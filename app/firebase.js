// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl163vpmP_r6nPh4YOx_R_tiZvl--C07A",
  authDomain: "fir-learning-2f4fa.firebaseapp.com",
  projectId: "fir-learning-2f4fa",
  storageBucket: "fir-learning-2f4fa.firebasestorage.app",
  messagingSenderId: "343165099618",
  appId: "1:343165099618:web:84dabaed324bf8ad3dbb3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export default app;
export const db=getFirestore(app);