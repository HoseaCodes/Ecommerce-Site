import React, { useContext } from 'react';

import { Switch, Route, useLocation } from 'react-router-dom';

import Cart from "./Cart/Cart";
import Category from "./Categories/categories";
import Create from "./CreateProduct/createProduct";
import DetailProduct from "./DetailProduct/DetailProduct";
import Login from "./Auth/Login";
import NotFound from "./Utils/NotFound/NotFound";
import OrderDetails from "./History/orderDetails";
import OrderHistory from "./History/orderHistory";
import Products from "./Products/Products";
import Register from "./Auth/Register";
import { GlobalState } from '../../GlobalState';

const Pages = () => {
    const location = useLocation();
    const currentRoute = location.pathname;
    const state = useContext(GlobalState);
    const [isLoggedIn] = state.userAPI.isLoggedIn
    const [isAdmin] = state.userAPI.isAdmin

    return (
        <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/detail/:id" exact component={DetailProduct} />
            <Route path="/login" exact component={isLoggedIn ? NotFound : Login} />
            <Route path="/register" exact component={isLoggedIn ? NotFound : Register} />
            <Route path="/category" exact component={isAdmin ? Category : NotFound} />
            <Route path="/create_product" exact component={isAdmin ? Create : NotFound} />
            <Route path="/edit_product" exact component={isAdmin ? Create : NotFound} />
            <Route path="/history" exact component={isLoggedIn ? OrderHistory : NotFound} />
            <Route path="/history/:id" exact component={isLoggedIn ? OrderDetails : NotFound} />
            <Route path="/cart" exact component={Cart} />
            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default Pages;