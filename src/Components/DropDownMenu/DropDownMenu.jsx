import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./DropDownMenu.css"
import post from '../../Images/anime.jpg';

const DropDownMenu = () => {

    const [activeMenu, setActiveMenu] = useState('main')

    return (
        <div className="dropdown">
            <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} className="menu-primary">
                <div className="menu">
                    <Link to="/blog" className="dropdown-item">Blog Tag 1</Link>
                    <Link to="/blog" className="dropdown-item">Blog Tag 2 </Link>
                    <Link to="/blog" className="dropdown-item">Blog Tag 3</Link>
                    <Link to="/blog" className="dropdown-item">Blog Tag 4</Link>
                    {/* <div className="menu-post"> */}
                    <ul className="menu-column-post">
                        <li className="menu-post">
                            <img src={post} alt="Post 1" width="180px" />
                            <h5>Post Title</h5>
                        </li>
                        <li className="menu-post">
                            <img src={post} alt="Post 1" width="180px" />
                            <h5>Post Title</h5>
                        </li>
                        <li className="menu-post">
                            <img src={post} alt="Post 1" width="180px" />
                            <h5>Post Title</h5>
                        </li>
                        <li className="menu-post">
                            <img src={post} alt="Post 1" width="180px" />
                            <h5>Post Title</h5>
                        </li>
                        <li className="menu-post">
                            <img src={post} alt="Post 1" width="180px" />
                            <h5>Post Title</h5>
                        </li>
                    </ul>
                    {/* </div> */}
                </div>


            </CSSTransition>
        </div>

    )
}

export default DropDownMenu;