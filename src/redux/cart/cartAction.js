import { ADD_ITEM, TOGGLE_CART_HIDDEN } from './cartType'

export const addToCart = item => ({
    type: ADD_ITEM,
    payload: item
})

export const toggleHidden = () => ({
    type: TOGGLE_CART_HIDDEN
})
