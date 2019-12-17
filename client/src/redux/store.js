// * Global state
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'


import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger)
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))
sagaMiddleware.run(rootSaga)


const persistor = persistStore(store)

export { store, persistor }