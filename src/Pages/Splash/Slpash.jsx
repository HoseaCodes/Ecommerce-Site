import React, { Component } from 'react';
import Blog from '../../Components/Blog/Blog';
import MainCarousel from '../../Components/Carousel/Carousel';
import NavBar from '../../Components/NavBar/NavBar';
import Subscription from '../../Components/PopUp/Subscription';
import '../../App.css';

class Splash extends Component {
    state = { open: true }

    render() {
        return (
            <div className="app">
                <NavBar />
                <MainCarousel />
                <Blog />
            </div>
        )
    }
}

export default Splash;
