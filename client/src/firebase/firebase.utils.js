import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import collectionComponent from '../pages/collection/collection.component';

const config = {
    apiKey: "AIzaSyDlIaJGyq6PFhngpjeSiecYBBgpXMwkW6A",
    authDomain: "e-commerce-clothes.firebaseapp.com",
    databaseURL: "https://e-commerce-clothes.firebaseio.com",
    projectId: "e-commerce-clothes",
    storageBucket: "e-commerce-clothes.appspot.com",
    messagingSenderId: "246095563380",
    appId: "1:246095563380:web:51b7b3c710828742bcdf21",
    measurementId: "G-PH33VZGSPC"
};


firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }

    }
    return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef)
    const batch = firestore.batch();
    objectToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    })
    
    return await batch.commit()
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map( doc => {
        const { title, items, linkUrl } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
            linkUrl
        };
    });
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google authetication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
