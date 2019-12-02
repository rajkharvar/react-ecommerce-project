import { SET_CURRENT_USER } from './userType'

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
})

export default setCurrentUser