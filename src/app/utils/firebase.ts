// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "benblog-24864.firebaseapp.com",
    projectId: "benblog-24864",
    storageBucket: "benblog-24864.firebasestorage.app",
    messagingSenderId: "504576532882",
    appId: "1:504576532882:web:7dfeb592bb4908cc17614b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
