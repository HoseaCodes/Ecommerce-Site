import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import burger from '../../Images/burger.jpg';
import logo1 from '../../Images/logo6.png';
import Content from './ContentBar';
import styled from 'styled-components';
import { GlobalState } from '../../GlobalState';
import Close from '../Headers/icon/close.svg';
import axios from 'axios'
import Newsletter from "../../Pages/Newsletter/Newsletter";

const NavBar = (props) => {
    const [open, setOpen] = useState("false");
    const [isActive, setActive] = useState("false");
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const [menu, setMenu] = useState(false)
    const [isLoggedIn] = state.userAPI.isLoggedIn

    const handleToggle = () => {
        setActive(!isActive);
    };
    const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;
    const logoutUser = async () => {
        await axios.get('/user/logout')
        localStorage.removeItem('firstLogin')
        window.location.href = "/"
    }


    const loggedInRouter = () => {
        return (
            <>
                <Link className="nav-item" to="/" onClick={logoutUser}>Logout</Link>
            </>
        )
    }


    return (
        <div className="header-nav">
            <div className='burger-nav'>
                <img className='nav-img' src={burger} alt="menu" width='50px' height='50px'
                    onClick={handleToggle}
                />
            </div>
            <Content />

            <nav>
                <div className={`main-nav ${isActive ? "" : "main-nav open"}`}>
                    <Wrapper>
                        <Link to="/blog" className="nav-item" /*onMouseOver={() => setOpen(!open)}*/>Blog</Link>
                        <Link to="/masterclasses" className="nav-item" onMouseOver={() => setOpen(!open)}>Master Classes</Link>
                        <Link to="/coaching" className="nav-item" >Coaching Services</Link>
                    </Wrapper>
                    <div>
                        <div className="logo">
                            <h1>
                                <Link to="/">{isAdmin ? 'Admin' : <img src={logo1} alt="Politically Savvy Logo" width='300px' />}</Link>
                            </h1>
                        </div>
                    </div>
                    <Wrapper>
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
                    </Wrapper>

                </div>
            </nav>

        </div >

    )
}


export default NavBar;
