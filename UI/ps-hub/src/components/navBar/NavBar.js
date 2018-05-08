import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';

import RightTabs from './RightTabs';
import NavBarElementConstants from '../../redux/reduxConstants/NavBarElementConstants';

class NavBar extends Component {

    constructor(props) {
        super(props);
        console.log('NAVBAR STATE: ' + JSON.stringify(this.props));
    }

    getNavBarRightElement() {
        switch(this.props.rightElement) {
            case NavBarElementConstants.rightElements.RightTabs:
                return <RightTabs {...this.props}/>;
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
            <AppBar
                title = { this.props.barTitle }
                showMenuIconButton = { false }
                iconElementLeft = { this.getNavBarLeftElement() }
                iconElementRight = { this.getNavBarRightElement() }/>
                
        );
    }
}

export default NavBar;