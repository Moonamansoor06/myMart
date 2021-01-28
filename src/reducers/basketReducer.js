import {
  ADD_PRODUCT_BASKET,
  CLOSE_PRODUCT,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
} from "../actions/types";

import {
  handleAddToCart,
  handleRemoveCartItem,
  handleReduceCartItem,
  handleIncreaseCartItem,
} from "./basket.utils";

const INITIAL_STATE = {
  cartItems: [],
};

const BasketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      return {
        ...state,
        cartItems: handleAddToCart({
          prevCartItems: state.cartItems,
          nextCartItem: action.payload,
        }),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: handleReduceCartItem({
          prevCartItems: state.cartItems,
          cartItemToReduce: action.payload,
        }),
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: handleIncreaseCartItem({
          prevCartItems: state.cartItems,
          cartItemToIncrease: action.payload,
        }),
      };
    case CLOSE_PRODUCT:
      console.log("entered close");
      return {
        ...state,
        cartItems: handleRemoveCartItem({
          prevCartItems: state.cartItems,
          cartItemToRemove: action.payload,
        }),
      };

    default:
      return state;
  }
};

export default BasketReducer;
