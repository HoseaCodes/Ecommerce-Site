import React from "react";
import Header from '../../Components/Headers/Headers';
import MainPages from '../../Components/MainShopPages/Pages';
import Products from "../../Components/MainShopPages/Products/Products";
import NavBar from "../../Components/NavBar/NavBar";
import './Shop.css';

const Shop = () => {
    return (
        <div>
            <NavBar />
            <div className="shop-container">
                <Header className="sidebar" />
                <MainPages />
                <Products />
            </div>
        </div>
    )
}

export default Shop;