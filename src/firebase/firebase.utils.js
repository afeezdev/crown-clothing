import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAK01u1KUjVrG1068XNHhRi65vNi8QaoZI",
    authDomain: "crown-clothing2.firebaseapp.com",
    databaseURL: "https://crown-clothing2.firebaseio.com",
    projectId: "crown-clothing2",
    storageBucket: "crown-clothing2.appspot.com",
    messagingSenderId: "973195281402",
    appId: "1:973195281402:web:7ccbbe11e775841cf85a43",
    measurementId: "G-WRR780TR9E"
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
