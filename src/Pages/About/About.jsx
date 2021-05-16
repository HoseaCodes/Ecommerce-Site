import React from 'react';

import about from '../../Images/about.png'
import aboutQuote from '../../Images/about-quote.png'
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';
import './About.css';

const About = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="about-container">

                    <img className="about-img" src={about} alt="Founder" />
                    <div className="about-text">
                        <h2>Welcome to Politically Savvy</h2>
                        <p>For years, I have served as a useful source to those seeking creative inspiration, innovate help, and personal growth advice. I finally decided to own that role and be intentional about it.
                        I started writing about my experiences, thoughts, and curious wonders of the world; while creatively incorporating my educational background.  With a BA in political science and journalism, I've become a expert in behavioral science.
                        I founded PoliticallySavvy.org with a mission to give others a taste of what goes on in my mind, and offer my services to those seeking professional and personal assistance.
                        Take some time to explore the blog, read something interesting, and feel free to reach out if you would like to collaborate on a project together.</p>
                        <p className="about-signoff">Peace & Love, <br /> <span> Altremese Banks</span> </p>
                    </div>
                </div>
            </div>
            <hr className="about-hr" />
            <div className="about-quote-container">
                <div className="about-quote-div">
                    <h2 className="about-believe-title">What We Believe</h2>
                    <p className="about-quote">
                        <em>
                            "The most exemting, challenging, and significant relationship of all is the one you have with yourself. And if you find someone to love the you you love, well that's just fabulous."
                        </em>
                    </p>
                    <p className="about-quote name">- Carrie Bradshaw </p>

                </div>
                <img src={aboutQuote} alt="Founder" />
            </div>

            <Footer />
        </>
    )

}

export default About;