import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

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



// * saving user Profile 
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

// * Check if current user session is available
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}

// * function converts snapshot to object with title as key and items as value
export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};


// * Adding localdata to firestore
export const addCollectionsAndData = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  // * BATCH is used to perform upto 500 operations at a time
  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    const newRef = collectionRef.doc()
    batch.set(newRef, obj)
  })
  console.log(batch)
  return await batch.commit()

}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase 