import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
apiKey: "AIzaSyAwv75d8Ej0Hv6MYqQMBkBtLeYA_Er4_uQ",
authDomain: "burgerqueen-a8d13.firebaseapp.com",
projectId: "burgerqueen-a8d13",
storageBucket: "burgerqueen-a8d13.appspot.com",
messagingSenderId: "1021775351829",
appId: "1:1021775351829:web:d2690c6e62043a0fb63e1c",
measurementId: "G-X3X7P9SBLG"
};
    
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();