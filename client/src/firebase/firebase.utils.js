import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import collectionComponent from '../pages/collection/collection.component';

const config = {
  apiKey: "AIzaSyCe98H5-MF8oDR13ESDyJsULYlE_jTsmMs",
  authDomain: "crown-clothing-6497c.firebaseapp.com",
  databaseURL: "https://crown-clothing-6497c.firebaseio.com",
  projectId: "crown-clothing-6497c",
  storageBucket: "crown-clothing-6497c.appspot.com",
  messagingSenderId: "121263248468",
  appId: "1:121263248468:web:7fbd4a3c90aa8cb95d09c1",
  measurementId: "G-CS46DZDSHJ",
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
