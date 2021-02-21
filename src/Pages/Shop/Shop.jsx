import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from '../../GlobalState';
import Header from '../../Components/Headers/Headers';
import MainPages from '../../Components/MainShopPages/Pages';
import NavBar from "../../Components/NavBar/NavBar";

const Shop = () => {
    return (
        <div>
            <DataProvider>
                <Router>
                    <NavBar />
                    <div className="App">
                        <Header />
                        <MainPages />
                    </div>
                </Router>
            </DataProvider>
        </div>
    )
}

export default Shop;