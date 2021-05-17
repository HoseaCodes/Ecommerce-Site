import React from 'react';

import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';

const Instagram = () => {
    return (
        <>
        <NavBar/>
        <InstagramFeed token={your_token}  counter="6"/>
        <Footer />
        </>

    )
}

export default Instagram