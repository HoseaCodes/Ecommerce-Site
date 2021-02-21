import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import burger from '../../Images/burger.jpg';
import logo1 from '../../Images/logo6.png';
import Content from './ContentBar';
import styled from 'styled-components';


const NavBar = (props) => {
    const [open, setOpen] = useState("false");
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };
    const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;
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
                        <Link to="/home" className="nav-item active" onMouseOver={() => setOpen(!open)}>Home</Link>
                        {open && props.children}
                        <Link to="/blog" className="nav-item" onMouseOver={() => setOpen(!open)}>Blog</Link>
                        <Link to="/masterclasses" className="nav-item" onMouseOver={() => setOpen(!open)}>Master Classes</Link>
                        <Link to="/coaching" className="nav-item" >Coaching Services</Link>
                    </Wrapper>
                    <div>
                        <Link to="/home" > <img src={logo1} alt="Politically Savvy Logo" width='300px' /> </Link>
                    </div>
                    <Wrapper>
                        <Link to="/shop" className="nav-item" >Shop</Link>
                        <Link to="/about" className="nav-item" >About</Link>
                        <Link to="/contact" className="nav-item">Contact</Link>
                        <Link to="/contact" className="nav-item">Keep In Touch</Link>
                    </Wrapper>
                </div>
            </nav>

        </div >

    )
}


export default NavBar;
