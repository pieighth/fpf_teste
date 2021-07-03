import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import ListProduct from './pages/listProduct';
 import NewProduct from './pages/newProduct';
 import UpdateProduct from './pages/updateProduct'

export default function Routes(){
    return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={ListProduct} />
            <Route path="/product/new" exact component= {NewProduct} /> 
            <Route path="/product/update/:i"  component= {UpdateProduct} /> 
        </Switch>
    </BrowserRouter>
    );
}