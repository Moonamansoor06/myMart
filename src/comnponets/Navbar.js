import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import getNumbers from './../actions/getAction';


import { Link} from 'react-router-dom'


import { Container, List } from '@material-ui/core'


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import Typography from '@material-ui/core/Typography';





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
  },
  navbarDisplayFlex: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 2,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '50px 60px 0 60px',

  },
  navDisplayFlex: {

    listStyle: 'none',
    display: 'inline-block',
    paddingRight: '10px',
    paddingLeft: '10px',


  },
  appbar:{
    backgroundImage: `url('./assets/Womenshopping.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100px',
    position: 'relative'
  },
  link: {
    marginRight: '20px',
    marginLeft: '10px',
    color: '#fff',
    fontSize: '20px',
    fontWeight: 'bold',
    textEmphasisColor: '#212121',
    textShadow: '#212121'
  },
  title: {
    flexGrow: 1,
  },

}));

function Navbar(props) {
  useEffect(() => {
    getNumbers();
  }, [])
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" >



        <Container className={classes.navbarDisplayFlex}>
          <Typography variant="h6" className={classes.title}>
            My Mart
          </Typography>
          <List component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}  >
            <Link to='/' className={classes.link}>Home</Link>
            <Link to='/about' className={classes.link}>Account</Link>
            <Link to='/cart' className={classes.link}>
              <ion-icon name="basket-outline"></ion-icon>
      Cart <span >  {Object.keys(props.basketProps.cartItems).length}</span>
            </Link>
          </List>
        </Container>




      </AppBar>
    </div>
  );




}
const mapStateToProps = state => ({
  basketProps: state.basketState
})

export default connect(mapStateToProps, { getNumbers })(Navbar);
