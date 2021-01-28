import {ADD_PRODUCT_BASKET} from './types'
import ProductIndex from './../productIndex';

export const addBasket=(product)=>{
    return (dispatch)=>{
        console.log('Adding to basket')
       // console.log('product', product.title)
        dispatch({
            type:ADD_PRODUCT_BASKET,
            payload:product
        })
    }
}   