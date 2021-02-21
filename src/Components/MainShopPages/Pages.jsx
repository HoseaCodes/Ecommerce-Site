import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from "./Products/Products";
import DetailProduct from "./DetailProduct/DetailProduct";
import Cart from "./Cart/Cart";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import NotFound from "./Utils/NotFound/NotFound";

const Pages = () => {
    return (
        <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/detail/:id" exact component={DetailProduct} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/cart" exact component={Cart} />
            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default Pages;