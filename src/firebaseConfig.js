import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyBom2gXB7bh_Y-8yMz62EvKtXwZAyre9l8",
    authDomain: "meneame-9d3a8.firebaseapp.com",
    databaseURL: "https://meneame-9d3a8.firebaseio.com",
    projectId: "meneame-9d3a8",
    storageBucket: "",
    messagingSenderId: "793877517816"
  });

export const db = firebaseApp.database()
export const storage = firebaseApp.storage()
export const auth = firebaseApp.auth()