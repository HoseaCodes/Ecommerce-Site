import React from 'react';
import './Home.css'
import NavBar from '../../Components/NavBar/NavBar';
import DropDownMenu from '../../Components/DropDownMenu/DropDownMenu';
import HomeSilder from '../../Components/HomeSilder/HomeSlider';

class Home extends React.Component {
    render() {
        return (
            <>
                <NavBar>
                    <DropDownMenu />
                </NavBar>
                <h1>Hi</h1>
            </>
        )
    }
}


export default Home;