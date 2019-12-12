import { userActionTypes } from './userType'

export const setCurrentUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
})

export const googleSignInStart = emailAndPassword => ({
    type: userActionTypes.GOOGLE_SIGN_IN_START,
    payload: emailAndPassword
})

export const googleSignInSuccess = user => ({
    type: userActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
})

export const googleSignInFailure = error => ({
    type: userActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload: error
})

export default setCurrentUser