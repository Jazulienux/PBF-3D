import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBOENpj2KTS8MkKRTfFIB7CNp_hyQh84xk",
    authDomain: "fir-login-9d381.firebaseapp.com",
    databaseURL: "https://fir-login-9d381.firebaseio.com",
    projectId: "fir-login-9d381",
    storageBucket: "fir-login-9d381.appspot.com",
    messagingSenderId: "1060175418722",
    appId: "1:1060175418722:web:175c249ffb3290660b883b",
    measurementId: "G-G29F6E4H6R"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;