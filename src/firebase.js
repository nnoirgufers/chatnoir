import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBfOLhoXzfAWNN01w12cWzucCkslNWxi34",
    authDomain: "noirgufers-56210.firebaseapp.com",
    projectId: "noirgufers-56210",
    storageBucket: "noirgufers-56210.appspot.com",
    messagingSenderId: "1072288931695",
    appId: "1:1072288931695:web:ecd47f4ff17e9b7c5b929a",
    measurementId: "G-6EPW107KHV"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }
