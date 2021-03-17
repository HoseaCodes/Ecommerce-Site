import React, { useState, useContext } from 'react';
import { GlobalState } from '../../GlobalState';
import Menu from './icon/menu.svg';
import Close from './icon/close.svg';
import Cart from './icon/cart.svg';
import { Link } from 'react-router-dom';
import axios from 'axios'

//Handle sub nav w/Admin
const Header = () => {
    const state = useContext(GlobalState)
    const [isLoggedIn] = state.userAPI.isLoggedIn
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    const [menu, setMenu] = useState(false)

    const logoutUser = async () => {
        await axios.get('/user/logout')
        localStorage.removeItem('firstLogin')
        window.location.href = "/"
    }

    const adminRouter = () => {
        return (
            <>
                <li><Link to="/create_product">Create Product</Link></li>
                <li><Link to="/category">Categories</Link></li>
            </>
        )
    }
    const loggedInRouter = () => {
        return (
            <>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }
    const styleMenu = {
        left: menu ? 0 : '-100%'
    }
    return (
        <header>
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="Menu" width="30" />
            </div>
            <div className="logo">
                <h1>
                    <Link to="/">{isAdmin ? 'Admin' : 'Poltically Savvy'}</Link>
                </h1>
            </div>

            <ul style={styleMenu}>
                <li>
                    <Link to="/">{isAdmin ? 'Products' : 'Shop'}</Link>
                </li>
                {isAdmin && adminRouter()}
                {isLoggedIn ? loggedInRouter() : <li><Link to="/login">Login ✥ Register</Link></li>}

                <li className="menu" onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="CloseButton" width="30" className="menu" />
                </li>
            </ul>

            {
                isAdmin ? ''
                    : <div className="cart-icon">
                        <span>{cart.length}</span>
                        <Link to="/cart"> <img src={Cart} alt="Shoppingcart" width="30" /></Link>
                    </div>
            }


        </header>
    )
}

export default Header;