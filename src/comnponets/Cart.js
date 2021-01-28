import React from "react";
import { connect } from "react-redux";
import {
  removeCartItem,
  addProduct,
  reduceCartItem,
  increaseCartItem,
  clearCart,
} from "./../reducers/basket.actions";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffSharpIcon from "@material-ui/icons/HighlightOffSharp";
import ArrowBackIosSharpIcon from "@material-ui/icons/ArrowBackIosSharp";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  product: {
    width: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "left",

    padding: "0 0",
  },
  card: {
    width: "100%",
  },
  container: {
    Width: "1000px",
    justifyContent: "space-around",
    margin: "0 auto",
    marginTop: "50px",
  },

  productTitle: {
    width: "40%",
  },
  price: {
    width: "20%",

    display: "flex",
    alignItems: "center",
  },
  quantity: {
    width: "40%",

    display: "flex",
    alignItems: "center",
  },
  total: {
    width: "10%",

    display: "flex",
    alignItems: "center",
  },
  basketTotalContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    padding: "10px 0",
  },
  basketTotalTitle: {
    marginTop: "40px",
    marginLeft: "65%",
    width: "80%",
  },
  basketTotal: {
    width: "50%",
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    width: "100%",

    display: "flex",
    justifyContent: "flex-start",
    borderBottom: "4px solid lightgray",
    margin: "0 auto",
  },
}));

const Cart = ({
  basketProps,
  productProps,
  removeCartItem,
  addProduct,
  reduceCartItem,
  increaseCartItem,
  clearCart,
}) => {
  let productsInCart = [];

  Object.keys(basketProps.cartItems).forEach(function (item) {
    console.log("basketProps.cartItems[items]", basketProps.cartItems[item]);

    productsInCart.push(basketProps.cartItems[item]);
  });

  function truncate(str) {
    return str.length > 25 ? str.substring(0, 25) : str;
  }
  let basketTotal = 0;
  {
    productsInCart = productsInCart.map((product, index) => {
      basketTotal = basketTotal + product.quantity * product.price;
      return (
        <div key={index}>
          <div className="product">
            <IconButton onClick={() => removeCartItem(product)}>
              <HighlightOffSharpIcon />{" "}
            </IconButton>
            <img src={product.image}></img>
            <span className="sm-hide">{truncate(product.title)}</span>
            <div className="price sm-hide">Rs.{product.price}</div>
            <div className="quantity">
              <IconButton
                onClick={() => reduceCartItem(product)}
                className="decrease"
              >
                <ArrowBackIosSharpIcon />
              </IconButton>
              <span>{product.quantity}</span>
              <IconButton
                onClick={() => increaseCartItem(product)}
                className="increase"
              >
                <ArrowForwardIosSharpIcon />
              </IconButton>
            </div>
            <div className="total">
              Rs.{product.quantity * product.price},00
            </div>
          </div>
        </div>
      );
    });
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.container}>
          <Paper className={classes.paper}>
            <h5 className={classes.productTitle}>PRODUCT</h5>
            <h5 className={classes.price}>PRICE</h5>
            <h5 className={classes.quantity}>QUANTITY</h5>
            <h5 className={classes.total}>TOTAL</h5>
          </Paper>
        </Grid>

        <Grid item className={classes.product}>
          {productsInCart}
        </Grid>
      </Grid>

      <Grid item className={classes.basketTotalContainer}>
        <Paper elevation={0} className={classes.basketTotalTitle}>
          Basket Total: Rs.{basketTotal},00
        </Paper>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
  productProps: state.productState,
});
const mapDispatchToProps = (dispatch) => {
  return {
    removeCartItem: (cartItem) => dispatch(removeCartItem(cartItem)),
    addProduct: (cartItem) => dispatch(addProduct(cartItem)),
    reduceCartItem: (cartItem) => dispatch(reduceCartItem(cartItem)),
    increaseCartItem: (cartItem) => dispatch(increaseCartItem(cartItem)),
    clearCart: () => dispatch(clearCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
