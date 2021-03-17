import React from 'react';
import './Home.css'
import NavBar from '../../Components/NavBar/NavBar';
import DropDownMenu from '../../Components/DropDownMenu/DropDownMenu';

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