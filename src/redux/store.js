// * Global state
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

const middlewares = [thunk]

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger)
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

const persistor = persistStore(store)

export { store, persistor }