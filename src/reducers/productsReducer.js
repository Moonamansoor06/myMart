import { FETCH_PRODUCTS_START,FETCH_PRODUCTS_REQUEST,FETCH_PRODUCTS_FAILURE } from './../actions/types';

const INITIAL_STATE = { isLoading:false,
products:[{}],
error:'' };

export default function ProductsReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_PRODUCTS_START:
 
    return {  products:action.payload, isLoading:false,error:'' };
    case FETCH_PRODUCTS_REQUEST:

    return {  ...state,isLoading:true};
    case FETCH_PRODUCTS_FAILURE:

    return { products:'', error:action.payload,
    isLoading:false };
  default:
    return state;
  }
}