import React, {Component} from 'react'
import Product from "./Product"
import Title from './Title';
import {storeProducts} from "../data";
import {ProductConsumer} from '../context';
export default class ProductList extends Component{
  state={
    product: storeProducts
  }
  render(){
    console.log(this.state.product);
    return(
       <React.Fragment>
       <div className="py-5">
       <div className="container">
         <Title name="our " title="products" />

       <div className="row">
         <ProductConsumer>
           {
             value=>{
              return <h1>{value}</h1>
             }
           }

         </ProductConsumer>

       </div>
       </div>
       </div>
       </React.Fragment>
    );
  }


}
