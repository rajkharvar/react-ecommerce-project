import { put, takeLatest, call, all } from 'redux-saga/effects'

import { userActionTypes } from '../user/userType'
import { clearCart } from './cartAction'

export function* clearCartOnSignOut() {
  yield put(clearCart())
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)])
}