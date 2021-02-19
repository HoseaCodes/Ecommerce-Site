import React, { Component } from 'react';
import Blog from '../../Components/Blog/Blog';
import MainCarousel from '../../Components/Carousel/Carousel';
import NavBar from '../../Components/NavBar/NavBar';
import Subscription from '../../Components/PopUp/Subscription';

class Splash extends Component {
    state = { open: true }

    render() {
        return (
            <div>
                <NavBar />
                <MainCarousel />
                <Blog />
            </div>
        )
    }
}

export default Splash;
