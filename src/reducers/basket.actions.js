import {ADD_PRODUCT_BASKET,CLOSE_PRODUCT,DECREASE_QUANTITY,INCREASE_QUANTITY,CLEAR_CART} from './../actions/types'

export const addProduct = (nextCartItem) => ({
  type: ADD_PRODUCT_BASKET,
  payload: nextCartItem
});

export const removeCartItem = (cartItem) => ({
  type: CLOSE_PRODUCT,
  payload: cartItem
});

export const reduceCartItem = (cartItem) => ({
  
  type: DECREASE_QUANTITY,
  payload: cartItem
});

export const increaseCartItem = (cartItem) => ({
    type: INCREASE_QUANTITY,
    payload: cartItem
  });

export const clearCart = () => ({
  type: CLEAR_CART
})