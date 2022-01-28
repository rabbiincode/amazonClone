import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
 apiKey: "AIzaSyBWThOpRITKAvs1dw8u1ICUdEPkMaGHHho",
 authDomain: "ama-100.firebaseapp.com",
 projectId: "ama-100",
 storageBucket: "ama-100.appspot.com",
 messagingSenderId: "933582303840",
 appId: "1:933582303840:web:74c5ce1e1cf0a23df90905"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }