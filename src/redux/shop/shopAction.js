import { FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_FAILURE, FECTH_COLLECTIONS_SUCCESS } from "./shopType";
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

// ? START
export const fetchCollectionStart = () => ({
  type: FETCH_COLLECTIONS_START
})

// ! FAILURE
export const fetchCollectionFailure = errorMessage => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
})

// * SUCCESS
export const fetchCollectionSuccess = collectionsMap => ({
  type: FECTH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})

// * This method can dispatch all action of shop based on condition
export const fetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections')
    dispatch(fetchCollectionStart())
    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        dispatch(fetchCollectionSuccess(collectionsMap))
      })
      .catch(error => dispatch(fetchCollectionFailure(error.message)))
  }
}