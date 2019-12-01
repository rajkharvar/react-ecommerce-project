import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import firebaseConfig from '../.env.local/keys'


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