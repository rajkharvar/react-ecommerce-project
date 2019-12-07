import SHOP_DATA from '../../constants/shop.data'

const initState = {
  collections: SHOP_DATA
}

const shopReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default shopReducer