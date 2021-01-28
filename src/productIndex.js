import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchProduct} from './actions/productActions'
import Home from './comnponets/Home'
import {addBasket} from './actions/addAction'


import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
      height:'100%',
      margin:'50px',
    flexGrow: 1,
  },
 
  cardroot: {
      height:'100%',
    maxWidth: 345,
  },
  item:{
      height:'100%'
  },
  media: {
    height: '15rem',
   
  },
  control: {
    padding: theme.spacing(2),
  },
}));


const ProductIndex=({fetchProduct,productData,addBasket})=>{

  useEffect(() => {
    fetchProduct()
   
    
  }, [])
  console.log(productData)
 
  const classes = useStyles();
  return(
   
    productData.isLoading ?(
      <div>
      <h1>Loading....</h1>
    </div>
    ) :productData.error?(<h2>{productData.error}</h2>) :(
   /*  <div>
    {productData && productData.products &&
     products.map((product) =><Home {...product}/>
     )}
    </div>) */
      productData.error?(<h2>{productData.error}</h2>) :
      (
      <div style={{width:'100%'}}>
        <Grid container className={classes.root} spacing={2}>
        
        <Grid item>  
        {productData && productData.products && productData.products.map((prod)=>{
          
                                <Card key={prod.id} className={classes.cardroot}>
                                    
                                <CardMedia
                                    className={classes.media}
                                    image={prod.image}
                                    title="product image"
                                />
                                <CardContent>
                                <Typography variant="h6" color="textSecondary" component="p">
                                
                                            {prod.title}
                                        </Typography>
                                        
                                <Typography variant="h6" color="textSecondary" component="p">
                                
                                {prod.price}
                                        </Typography>
                                    
                                        
                            
                                <CardActions disableSpacing>
                                    <Button onClick={()=>addBasket(prod.title)}>Add to cart</Button>
                                </CardActions>
                                </CardContent>
                            </Card>
        })}
        </Grid>
        </Grid>
        )
       
         </div>
         
        

  )
        
  ) 
  )   
   
}
const mapStateToProps=(state)=> {
  return { productData: state.productState};
}
const mapDispatchToProps=(dispatch)=>{
  return{
    fetchProduct:()=>dispatch(fetchProduct(),addBasket())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductIndex)

/* import React,{useEffect} from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import {fetchProductStart} from './actions/productActions'
import { addBasket } from './actions/addAction';

function mapStateToProps(state) {
  return { products: state.productState};
}

const ProductsIndex= ()=> {
  const products=useSelector(mapStateToProps)
  const dispatch=useDispatch();
 
  console.log(products)
  useEffect(() => {
    dispatch(
      fetchProductStart()
    )
  }, []);

  const renderProducts=()=> {
      console.log(products)
    return products.map((product, index) => {
      return (
        <article key={index}>
          <h3>{product.fields.name}</h3>
          <p>{product.fields.tagName}</p>
          <p>{product.fields.price}</p>
        </article>
      );
    });
  }
  
    return (
      <div>
        <h2>Products</h2>
        {renderProducts()}
      </div>
    );
  }


export default ProductsIndex; */