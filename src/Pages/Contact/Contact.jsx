import React from 'react';
import Footer from '../../Components/Footer/Footer';

import NavBar from '../../Components/NavBar/NavBar';
import './Contact.css'

const Contact = () => {
    return (
        <>
            <NavBar />
            <div className="contact-container">

                <h2 className="contact-descp">Contact</h2>
                <h3 className="contact-title">Let's Work</h3>
                <h3 className="contact-subtitle">Together</h3>
                <h3 className="contact-style">Connect</h3>
                <div className="contact-items">
                    <div className="contact-item">
                        <h4>
                            Address
                        </h4>
                        <p>
                            Toutsuite
                              <p>
                                Houston, TX
                            </p>
                        </p>
                    </div>
                    <div className="contact-item">
                        <h4>
                            Phone
                        </h4>
                        <p>
                            +1 832-621-1266
                        </p>
                    </div>
                    <div className="contact-item">
                        <h4>
                            Email
                        </h4>
                        <p className="contact-email">
                            <a href="mailto:altremeseb@yahoo.com">altremeseb@yahoo.com</a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Contact;