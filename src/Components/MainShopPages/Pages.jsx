import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from "./Products/Products";
import DetailProduct from "./DetailProduct/DetailProduct";
import Cart from "./Cart/Cart";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import OrderHistory from "./History/orderHistory";
import OrderDetails from "./History/orderDetails";
import Category from "./Categories/categories";
import Create from "./CreateProduct/createProduct";
import NotFound from "./Utils/NotFound/NotFound";
import { GlobalState } from '../../GlobalState';

const Pages = () => {
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