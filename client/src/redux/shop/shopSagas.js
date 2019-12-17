import { call, put, takeLatest, all } from 'redux-saga/effects'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import ShopActionTypes from './shopType'
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shopAction'

export function* fetchCollectionAsync() {
  try {
    const collecionRef = firestore.collection('collections')
    const snapshot = yield collecionRef.get()
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  )
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}