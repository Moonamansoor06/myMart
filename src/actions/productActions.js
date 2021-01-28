import axios from "axios";
import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
} from "./types";

export const fetchProductStart = (products) => ({
  type: FETCH_PRODUCTS_START,
  payload: products,
});
export const fetchProductRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});
export const fetchProductFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});
export const fetchProduct = () => {
  return (dispatch) => {
    dispatch(fetchProductRequest);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const products = response.data;
        console.log(products);
        dispatch(fetchProductStart(products));
      })
      .catch((error) => {
        const errormsg = error.message;
        dispatch(fetchProductFailure(errormsg));
      });
  };
};
