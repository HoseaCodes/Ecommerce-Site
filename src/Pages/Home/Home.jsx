import React from 'react';

import DropDownMenu from '../../Components/DropDownMenu/DropDownMenu';
import NavBar from '../../Components/NavBar/NavBar';
import './Home.css'

class Home extends React.Component {
    render() {
        return (
            <>
                <NavBar>
                    <DropDownMenu />
                </NavBar>
            </>
        )
    }
}


export default Home;