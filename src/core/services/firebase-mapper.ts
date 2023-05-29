import {QueryDocumentSnapshot} from 'firebase/firestore';
import firebase from "firebase/compat";
import FirestoreDataConverter = firebase.firestore.FirestoreDataConverter;
import DocumentData = firebase.firestore.DocumentData;

export const converter = <T>(): FirestoreDataConverter<T> => ({
    toFirestore: (data: T) => data as DocumentData,
    fromFirestore: (snap, options) =>
        snap.data() as T
})
