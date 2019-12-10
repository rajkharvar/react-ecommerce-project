import { FETCH_COLLECTIONS_START, FECTH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE } from './shopType'

const initState = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
}

const shopReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      }
    case FECTH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      }
    case FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state
  }
}

export default shopReducer