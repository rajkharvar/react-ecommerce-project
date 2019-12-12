import { cartActionTypes } from './cartType'

export const addToCart = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})

export const toggleHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
})

export const clearItemFromCart = item => ({
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const removeItemFromCart = item => ({
    type: cartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item
})

export const clearCart = () => ({
    type: cartActionTypes.CLEAR_CART
})
