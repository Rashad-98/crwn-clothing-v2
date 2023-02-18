import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyA7K0lFf26SoboMQICU-Pqqn0KHVub_8Ng",
    authDomain: "crown-clothing-db-d1864.firebaseapp.com",
    projectId: "crown-clothing-db-d1864",
    storageBucket: "crown-clothing-db-d1864.appspot.com",
    messagingSenderId: "400040507829",
    appId: "1:400040507829:web:345442cfaccdd2ef2f01fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//TODO: Add firestore to store users and other data.
//      Read the documentation first, do it, and then watch the tutorial.
//      Remember, any code related to firebase should be in kept in this file, you only export functions to deal with firebase to
//      other React components. This is like an api for firebase.