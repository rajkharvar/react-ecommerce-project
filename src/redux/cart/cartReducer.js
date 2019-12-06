import { ADD_ITEM, TOGGLE_CART_HIDDEN, CLEAR_ITEM_FROM_CART } from './cartType'
import { addToCart, clearItemFromCart } from './cartUtils'

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
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload)
      }
    default: return state
  }
}

export default cartReducer