import {initializeApp} from 'firebase/app';
import {getFirestore, collection} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBAN5omgC3oNdUvvpe7Mrs4R9pY-6989Mg",
    authDomain: "backlist-fdd40.firebaseapp.com",
    projectId: "backlist-fdd40",
    storageBucket: "backlist-fdd40.appspot.com",
    messagingSenderId: "762744568729",
    appId: "1:762744568729:web:6513f509223757b5773108",
    measurementId: "G-7ZQ20NRHMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export const dbBooks = collection(db, 'books');