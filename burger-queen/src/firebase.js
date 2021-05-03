import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyAyPmOsvm6JUu-ENy5I6inqjFmrq8ljiIY',
    authDomain: 'burger-queen-e9b03.firebaseapp.com',
    projectId: 'burger-queen-e9b03',
    storageBucket: 'burger-queen-e9b03.appspot.com',
    messagingSenderId: '117503256859',
    appId: '1:117503256859:web:2efeada13c348759620bbe'
};

const fb = firebase.initializeApp(firebaseConfig);
const auth = fb.auth();
const db = fb.firestore();

export default {auth, db};