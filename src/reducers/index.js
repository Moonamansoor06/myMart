import {combineReducers} from 'redux';
import basketReducer from './basketReducer'
import productsReducer from './productsReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const rootReducer=combineReducers({
    basketState:basketReducer,
    productState:productsReducer

})

const configStorage = {
  key: 'root',
  storage,
  whitelist: ['productData']
};

export default persistReducer(configStorage, rootReducer);