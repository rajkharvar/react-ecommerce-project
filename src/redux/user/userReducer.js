import { userActionTypes } from './userType'
const initialState = {
  currentUser: null,
  error: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
    case userActionTypes.GOOGLE_SIGN_IN_SUCCESS:
    case userActionTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
    case userActionTypes.GOOGLE_SIGN_IN_FAILURE:
    case userActionTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default: return state
  }
}

export default userReducer