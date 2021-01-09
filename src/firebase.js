import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBRU5-HoOhrZQDpiCNDpZe0Zn5EsLDklCU",
    authDomain: "todo-app-fd68c.firebaseapp.com",
    projectId: "todo-app-fd68c",
    storageBucket: "todo-app-fd68c.appspot.com",
    messagingSenderId: "425325153619",
    appId: "1:425325153619:web:f20514c01aa4c6c1fc25a6",
    measurementId: "G-HJP4E68WEE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };