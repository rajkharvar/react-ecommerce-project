import { ADD_ITEM, TOGGLE_CART_HIDDEN } from './cartType'
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
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    default: return state
  }
}

export default cartReducer