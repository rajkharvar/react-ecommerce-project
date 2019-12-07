import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/userReducer'
import cartReducer from './cart/cartReducer'
import directoryReducer from './directory/directoryReducer'
import shopReducer from './shop/shopReducer'

// * key - Level of the storage
// * storage - Actual storage lib from redux-persist
// * whitelist - An array of reducer reference

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)