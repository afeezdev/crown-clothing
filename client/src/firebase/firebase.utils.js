import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import collectionComponent from '../pages/collection/collection.component';

const config = {
  apiKey: "AIzaSyDKFDYfXx8EXwk4-PJIlnjbOFEZHhvxFnE",
  authDomain: "crown-clothes-7392e.firebaseapp.com",
  databaseURL: "https://crown-clothes-7392e.firebaseio.com",
  projectId: "crown-clothes-7392e",
  storageBucket: "crown-clothes-7392e.appspot.com",
  messagingSenderId: "14418103118",
  appId: "1:14418103118:web:77352f26a2e1fa6eb6ac1f",
  measurementId: "G-ES0Z46HPK4",
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
