export const addToCart = (cartItems, cartData) => {
    const checkIfExist = cartItems.find(cartItem => cartItem.id === cartData.id)
    if (checkIfExist) {
        return cartItems.map(cartItem => {
            if (cartItem.id === cartData.id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 }
            } else {
                return cartItem
            }
        })
    }
    return [...cartItems, { ...cartData, quantity: 1 }]
}