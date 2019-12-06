import { createSelector } from 'reselect'

// * The main benefit with reselect is to stop rendering of components when the state remains same

export const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedValue, cartItem) =>
        cartItem.quantity + accumulatedValue,
        0
    )
)

export const selectCartItemsTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedValue, cartItem) =>
        (cartItem.price * cartItem.quantity) + accumulatedValue,
        0
    )
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)