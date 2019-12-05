import { ADD_ITEM } from './cartType'
import { addToCart } from './cartUtils'

const initState = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addToCart(state.cartItems, action.payload)
      }
    default: return state
  }
}

export default cartReducer