import Navbar from './comnponets/Navbar'
import Home from './comnponets/Home'
import Cart from './comnponets/Cart'

import './App.css';
import {Provider} from 'react-redux';
import store from './store'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  //const store = store()

  return (
    <Provider store={store}>
    
    <div className="App">
       <BrowserRouter>
       <Navbar/>
       <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/cart' component={Cart}/>
       

        </Switch>
     
      </BrowserRouter>
    </div>

      </Provider>
  );
}

export default App;
