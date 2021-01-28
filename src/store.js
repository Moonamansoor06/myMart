//import {  applyMiddleware } from 'redux'
import {configureStore} from '@reduxjs/toolkit'
//import { composeWithDevTools } from 'redux-devtools-extension'
//import logger from 'redux-logger'
//import thunk from 'redux-thunk'

import rootReducer from './reducers/index'

const store = configureStore({
  reducer:rootReducer,
 
})

export default store










 
/* 

    import { createStore, applyMiddleware ,compose} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddle from 'redux-saga';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers';
import promise from 'redux-promise';
import rootSagas from './reducers/sagas/rootSagas';

const sagaMiddleware = createSagaMiddle();
export const middlewares = [thunk, sagaMiddleware, logger,promise];

export const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSagas);

export const persistor = persistStore(store);

export default {
  store,
  persistor
}; */