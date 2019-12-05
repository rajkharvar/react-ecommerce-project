import { ADD_ITEM } from './cartType'

export const addToCart = item => ({
    type: ADD_ITEM,
    payload: item
})
