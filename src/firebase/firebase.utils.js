import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// import firebaseConfig from '../.env.local/keys'

var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "react-ecommerce-project-e303c.firebaseapp.com",
    databaseURL: "https://react-ecommerce-project-e303c.firebaseio.com",
    projectId: "react-ecommerce-project-e303c",
    storageBucket: "react-ecommerce-project-e303c.appspot.com",
    messagingSenderId: "118708469119",
    appId: "1:118708469119:web:eb4c9748699efb80336e4a",
    measurementId: "G-89M53H8RQD"
};

console.log(firebaseConfig)


// saving user Profile 
export const createUserProfile = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        try {
            const { displayName, email } = userAuth
            const createdAt = new Date()
            userRef.set({ displayName, email, createdAt, ...additionalData })
        } catch (e) {
            console.log("Error occureed while creating a user object", e)
        }

    }
    return userRef
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase 