import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDW_vNBx7HVDXZ4a7jfszDx-5MOwFOPYR8",
    authDomain: "crown-clothing-61f6d.firebaseapp.com",
    databaseURL: "https://crown-clothing-61f6d.firebaseio.com",
    projectId: "crown-clothing-61f6d",
    storageBucket: "crown-clothing-61f6d.appspot.com",
    messagingSenderId: "424970189447",
    appId: "1:424970189447:web:491397b3d8787929685622",
    measurementId: "G-W2QQ7RRKZH"
};

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
    return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google authetication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
