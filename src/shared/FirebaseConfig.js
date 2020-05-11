import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCBBjpCUAdgbyYKoI_aRaHWni7yu5iP6RU",
    authDomain: "active-breaks.firebaseapp.com",
    databaseURL: "https://active-breaks.firebaseio.com",
    projectId: "active-breaks",
    storageBucket: "active-breaks.appspot.com",
    messagingSenderId: "762587028806",
    appId: "1:762587028806:web:93c1baf05490ed36929947",
    measurementId: "G-HZ2X0FRSXH"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
export const provider = new firebase.auth.GoogleAuthProvider();
