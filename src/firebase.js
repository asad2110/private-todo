// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCnYV4aynLruMKBniTVb5bZI5QF5lq2Has",
//     authDomain: "todo-app-f82c1.firebaseapp.com",
//     projectId: "todo-app-f82c1",
//     storageBucket: "todo-app-f82c1.appspot.com",
//     messagingSenderId: "371498167795",
//     appId: "1:371498167795:web:7d40ae7fa23e94f561b686",
//     measurementId: "G-NVC4THH7QZ"
//   };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({   
    apiKey: "AIzaSyCnYV4aynLruMKBniTVb5bZI5QF5lq2Has",
    authDomain: "todo-app-f82c1.firebaseapp.com",
    projectId: "todo-app-f82c1",
    storageBucket: "todo-app-f82c1.appspot.com",
    messagingSenderId: "371498167795",
    appId: "1:371498167795:web:7d40ae7fa23e94f561b686",
    measurementId: "G-NVC4THH7QZ" 
});

const db = firebaseApp.firestore();
export default db;