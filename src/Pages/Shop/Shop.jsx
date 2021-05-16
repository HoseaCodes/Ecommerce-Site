import React from "react";

import Header from '../../Components/Headers/Headers';
import MainPages from '../../Components/MainShopPages/Pages';
import NavBar from "../../Components/NavBar/NavBar";
import Products from "../../Components/MainShopPages/Products/Products";
import './Shop.css';

const Shop = () => {

    return (
        <div className="wrapper">
            <NavBar />
            <div className="shop-container">
                <Header className="sidebar" />
                <Products />
            </div>
        </div>
    )
}

export default Shop;