import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container-fluid">
            <div className="row footer-top">
                <div className="col-sm-3 ">
                    <ul className="list-unstyled mt-3">
                        <li>Keep in Touch</li>
                        <div className="mb-2"></div>
                        <li>Social Media</li>
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
                        <li>cpoyright 2021 Poltically Savvy LLC</li>
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
                        <li>Social Media</li>
                        <li>Made By <a href="">HoseaCodes</a> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;