import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDOvG6KVDyA89_epeSRYCKDyb0PfqAAHmU",
    authDomain: "clone-d8844.firebaseapp.com",
    databaseURL: "https://clone-d8844.firebaseio.com",
    projectId: "clone-d8844",
    storageBucket: "clone-d8844.appspot.com",
    messagingSenderId: "433189592426",
    appId: "1:433189592426:web:16f159815d57044f701913",
    measurementId: "G-X9FLD4KRXZ"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
 
export { db, auth }