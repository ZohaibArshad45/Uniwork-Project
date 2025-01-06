// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "uniwork-97265.firebaseapp.com",
    projectId: "uniwork-97265",
    storageBucket: "uniwork-97265.firebasestorage.app",
    messagingSenderId: "52299283892",
    appId: "1:52299283892:web:19642bfa401b5a09a4c6e1"
};

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);