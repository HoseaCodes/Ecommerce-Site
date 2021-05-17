import React, { useState, useContext } from "react";

import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Burger from "../../Images/burger.jpg";
import Close from "../Headers/icon/close.svg";
import Content from "./ContentBar";
import Menu from "../../Components/Headers/icon/menu.svg";
import Logo from "../../Images/logo6.png";
import Newsletter from "../../Pages/Newsletter/Newsletter";
import { GlobalState } from "../../GlobalState";
import "./NavBar.css";

const NavBar = (props) => {
	const [open, setOpen] = useState("false");
	const state = useContext(GlobalState);
	const [isAdmin] = state.userAPI.isAdmin;
	const [menu, setMenu] = useState(false);
	const [isLoggedIn] = state.userAPI.isLoggedIn;

	const logoutUser = async () => {
		await axios.get("/user/logout");
		localStorage.removeItem("firstLogin");
		window.location.href = "/";
	};

    const loggedInRouter = () => {
        return (
            <>
                <Link className="nav-item" to="/" onClick={logoutUser}>Logout</Link>
            </>
        )
    }

    return (
        <div className="header-nav">
            <Content />

            <nav fixed="top">
                <div className={`main-nav`}>
                    <div classname="wrapper">
                        <Link to="/blog" className="nav-item" /*onMouseOver={() => setOpen(!open)}*/>Blog</Link>
                        {/* <Link to="/masterclasses" className="nav-item" onMouseOver={() => setOpen(!open)}>Master Classes</Link> */}
                        <Link to="/coaching" className="nav-item" >Coaching Services</Link>
                        <Link to="/shop" className="nav-item">{isAdmin ? 'Products' : 'Shop'}</Link>
                        <Link to="/instagram" className="nav-item">{isAdmin ? null : 'Instagram'}</Link>
                    </div>
                    <div>
                        <div className="logo">
                            <h1>
                                <Link to="/">{isAdmin ? 'Admin' : <img src={Logo} alt="Politically Savvy Logo" width='300px' />}</Link>
                            </h1>
                        </div>
                    </div>
                    <div classname="wrapper">
                        <Link to="/about" className="nav-item" >About</Link>
                        {/* <Link className="nav-item"> */}
                        <Newsletter />
                        {/* </Link> */}
                        <Link to="/contact" className="nav-item">Contact</Link>
                        {isLoggedIn ? loggedInRouter() : <Link to="/login" className="nav-item">Login ✥ Register</Link>}
                        <li className="menu" onClick={() => setMenu(!menu)}>
                            <img src={Close} alt="CloseButton" width="30" className="menu" />
                        </li>
                    </div>
                </div>
                <div className="dropdown-nav">
                    <div className="logo">
                        <h1>
                            <Link to="/">{isAdmin ? 'Admin' : <img src={Logo} alt="Politically Savvy Logo" width='300px' />}</Link>
                        </h1>
                    </div>
                    <label htmlFor="bar-checker2" className='hamburger3'>
                        <img src={Menu} alt="Menu" width="30" />
                    </label>
                    <input type="checkbox" className='checker' id="bar-checker2"/>
                    <div className="dropdown-sidebar">
                        <Link to="/blog" className="nav-item" /*onMouseOver={() => setOpen(!open)}*/>Blog</Link>
                        {/* <Link to="/masterclasses" className="nav-item" onMouseOver={() => setOpen(!open)}>Master Classes</Link> */}
                        <Link to="/coaching" className="nav-item" >Coaching Services</Link>
                        <Link to="/shop" className="nav-item">{isAdmin ? 'Products' : 'Shop'}</Link>
                        <Link to="/shop" className="nav-item">{isAdmin ? 'Products' : 'Shop'}</Link>
                        <Link to="/about" className="nav-item" >About</Link>
                        {/* <Link className="nav-item"> */}
                        <Newsletter />
                        {/* </Link> */}
                        <Link to="/contact" className="nav-item">Contact</Link>
                        {isLoggedIn ? loggedInRouter() : <Link to="/login" className="nav-item">Login ✥ Register</Link>}
                        <li className="menu" onClick={() => setMenu(!menu)}>
                            <img src={Close} alt="CloseButton" width="30" className="menu" />
                        </li>
                    </div>
                </div>
            </nav>

        </div >

    )
}

export default NavBar;
