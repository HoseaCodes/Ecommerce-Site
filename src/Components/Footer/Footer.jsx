import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-top">
            <div className="container" >
                <div className="row">
                    <div className="col-sm-3 ">
                        <ul className="list-unstyled mt-3">
                            <li>Subscribe to our newsletter</li>
                            <div className="mb-2"></div>
                            <input className="footer-input"
                                placeholder="Email Address"
                                type="email" name="" />
                            <br />
                            <a href="">Sign Up</a>
                            <p>By clicking SIGN UP, you agree to receive emails from Poosh and agree to our terms of use and privacy policy.</p>
                            <li>Made By <a href="">HoseaCodes</a> </li>
                        </ul>
                    </div>
                    <div className="col-sm-3 border-left">
                        <ul className="list-unstyled mt-3">
                            <li><a href="#" >Cookie Policy</a></li>
                            <div className="mb-2"></div>
                            <li><a href="#" >Privacy Policy</a></li>
                            <div className="mb-2"></div>
                            <li><a href="#" >Terms & Conditions</a></li>
                        </ul>
                        <ul className="list-unstyled mt-3">
                            <li>&copy; Poltically Savvy LLC</li>
                            <div className="mb-2"></div>
                            <li>All  Rights Reserved</li>
                        </ul>
                    </div>
                    <div className="col-sm-3 col-xs-12  border-left">
                        <ul className="list-unstyled mt-3">
                            <li><a href="#" >About</a></li>
                            <div className="mb-2"></div>
                            <li><a href="#" >Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-sm-3 border-left">
                        <ul className="list-unstyled mt-3">
                            <li>Keep in Touch</li>
                            <div className="mb-2"></div>
                            <div class="d-flex flex-column pl-md-2 pb-3">
                                <div class="row d-flex pl-2">
                                    <li class="footer-social">
                                        <span> <i class="fa fa-facebook" aria-hidden="true"></i></span>
                                        <span> <i class="fa fa-instagram" aria-hidden="true"></i> </span>
                                        <span> <i class="fa fa-twitter" aria-hidden="true"></i> </span>
                                    </li>
                                </div>
                            </div>
                            <li>Made By <a href="">HoseaCodes</a> </li>
                        </ul>
                    </div>
                </div>
            </div >
        </div >

    )
}

export default Footer;