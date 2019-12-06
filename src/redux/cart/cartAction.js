import { ADD_ITEM, TOGGLE_CART_HIDDEN, CLEAR_ITEM_FROM_CART } from './cartType'

export const addToCart = item => ({
    type: ADD_ITEM,
    payload: item
})

export const toggleHidden = () => ({
    type: TOGGLE_CART_HIDDEN
})

export const clearItemFromCart = item => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: item
})
