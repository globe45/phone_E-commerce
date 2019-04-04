import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Component/Navbar';
import ProductList from './Component/ProductList';
import Product from './Component/Product';

import Details from './Component/Details';
import Cart from './Component/Cart';
import Default from './Component/Default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>

          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/" component={Product} />
          <Route component={Default} />
        </Switch>

      </React.Fragment>

    );
  }
}

export default App;
