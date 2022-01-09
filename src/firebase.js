import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAADI4Uku0sUJU6NC-GcOCqh4b34iPUncc",
    authDomain: "noir-chat.herokuapp.com",
    projectId: "noirchat-ea0b0",
    storageBucket: "noir-chat.herokuapp.com",
    messagingSenderId: "830454769514",
    appId: "1:830454769514:web:a3a8e6825e0b587ee7a713",
    measurementId: "G-J18GZ4QT92"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }
