import React, { Component } from 'react';

import NavBarStyle from './NavBarStyle';
import NavBarElementConstants from '../../redux/reduxConstants/NavBarElementConstants';
import { Navbar } from 'react-bootstrap';

class NavBar extends Component {

    constructor(props) {
        super(props);
        //console.log('NAVBAR STATE: ' + JSON.stringify(this.props));
    }

    getNavBarRightElement() {
        switch(this.props.rightElement) {
            case NavBarElementConstants.rightElements.RightTabs:
                return null;
            default:
                return null;
        }
    }

    getNavBarLeftElement() {
        switch(this.props.leftElement) {
            default:
                return null;
        }
    }

    render() {
        return (
            <Navbar style = { NavBarStyle.NavBar }>
                <Navbar.Header>
                    <img className = 'navbar-left' style = { NavBarStyle.BrandImage } alt = 'logo'/>
                    <Navbar.Brand>
                        <p style = { NavBarStyle.BrandTitle }>{ this.props.barTitle }</p>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        );
    }
}

export default NavBar;