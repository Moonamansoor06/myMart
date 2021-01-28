import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProduct } from "./../actions/productActions";
import { ADD_PRODUCT_BASKET } from "./../actions/types";
import { addBasket } from "./../actions/addAction";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    direction: "row",
    justify: "center",
    alignItems: "center",
    flexGrow: 1,
  },

  cardroot: {
    marginTop: "3rem",
    width: "18rem",
    height: "25rem",
  },
  item: {
    width: "12rem",
    display: "flexGrow",
    height: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    margin: ".2rem .5rem",

    maxWidth: 500,
    height: "25rem",
    alignItems: "center",
  },
  carditem: {
    width: "6rem",
    height: "auto",
  },
  media: {
    width: "10rem",
    height: "10rem",
  },
  button: {
    flexDirection: "flexEnd",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const Home = ({ fetchProduct, productData, addBasket }) => {
  useEffect(() => {
    fetchProduct();
  }, []);

  const truncate = (str) => {
    if (str) return str.length > 70 ? str.substring(0, 70) + "..." : str;
  };

  console.log(productData);
  console.log("PRODUCTS are", productData.products[0].title);
  console.log(Object.keys(productData.products));

  const handleAddToCart = (id) => {
    if (!id) return;
    {
      console.log("id foound", id);
      console.log(productData.products[0].id);
      console.log(Object.keys(productData.products));
      let l = Object.keys(productData.products).length;
      console.log(l);
      for (let i = 0; i < l; i++) {
        console.log(productData.products[i]);
        if (id === productData.products[i].id) {
          addBasket(productData.products[i]);
          console.log("basket has", productData.products[i]);
        }
      }
    }
  };

  const classes = useStyles();

  return productData.isLoading ? (
    <div>
      <h1>Loading....</h1>
    </div>
  ) : productData.error ? (
    <h2>{productData.error}</h2>
  ) : productData.error ? (
    <h2>{productData.error}</h2>
  ) : (
    <div>
      <Grid container spacing={2} className={classes.root}>
        {productData.products.map((prod) => (
          <div>
            <Grid item className={classes.cardroot}>
              <Card key={prod.id} className={classes.paper} elevation={3}>
                <CardMedia
                  image={prod.image}
                  className={classes.media}
                  title="product image"
                />

                <Typography paragraph color="textSecondary">
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    component="p"
                    noWrap={false}
                  >
                    Name:{" "}
                  </Typography>
                  {truncate(prod.title)}
                </Typography>

                <Typography variant="body1" color="textSecondary" component="p">
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    component="p"
                  >
                    Price:{" "}
                  </Typography>
                  Rs.{prod.price}
                </Typography>

                <CardActions className={classes.button}>
                  <Button
                    elevation={5}
                    variant="text"
                    color="primary"
                    size="large"
                    onClick={() => handleAddToCart(prod.id)}
                  >
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </div>
        ))}
      </Grid>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    productData: state.productState,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: () => dispatch(fetchProduct()),
    addBasket: (product) =>
      dispatch({
        type: ADD_PRODUCT_BASKET,
        payload: product,
      }) /* dispatch(addBasket) */,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
