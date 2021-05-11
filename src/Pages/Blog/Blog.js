import React, { Component } from 'react';
import Blog from '../../Components/Blog/Blog';
import MainCarousel from '../../Components/Carousel/Carousel';
import NavBar from '../../Components/NavBar/NavBar';
import '../../App.css';

class BlogPage extends Component {
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

export default BlogPage;
