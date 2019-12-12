import { takeLatest, put, call, all } from 'redux-saga/effects'

import { userActionTypes } from './userType'
import { googleSignInSuccess, googleSignInFailure } from './userAction'
import { auth, googleProvider, createUserProfile } from '../../firebase/firebase.utils'

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    const userRef = yield call(createUserProfile, user)
    const userSnapshot = yield userRef.get()
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    )
  } catch (error) {
    yield put(googleSignInFailure(error))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)])
}