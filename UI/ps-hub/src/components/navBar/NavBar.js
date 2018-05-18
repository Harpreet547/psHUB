import React, { Component } from 'react';

import NavBarStyle from './NavBarStyle';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import logo from '../../resources/main/logo.png';
import more from '../../resources/main/more.png';
import AppConstants from '../../utils/AppConstants';
import historyManager from '../../managers/HistoryManager';

class NavBar extends Component {

    constructor(props) {
        super(props);
        //console.log('NAVBAR STATE: ' + JSON.stringify(this.props));
        this.state = {
            isExpanded: false,
            activeKeyTabsNavKey: this.props.activeTab,
        };
    }

    handleTabsNavSelect(key) {
        console.log(this.state)
        this.setState({
            ...this.state,
            activeKeyTabsNavKey: key
        });

        switch(key) {
            case 1:
                historyManager.pushRoute(AppConstants.routes.home, this.props);
                break;
            case 2:
                historyManager.pushRoute(AppConstants.routes.articles, this.props);
                break;
            default:
                break;
        }
    }

    handleUserNavSelect(key) {

    }
    
    render() {
        return (
            <Navbar style = { NavBarStyle.NavBar }>
                <img className = 'pull-left' src = { logo } style = { NavBarStyle.BrandImage } alt = 'logo'/>
                 <Navbar.Header style = { NavBarStyle.NavBarHeader }>
                    <Navbar.Brand style = { NavBarStyle.Brand }>
                        <p style = { NavBarStyle.brandTitle }>PS-HUB</p>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse style = { NavBarStyle.navBarCollapse }>
                    <Nav activeKey = { this.state.activeKeyTabsNavKey } onSelect = { (key) => { this.handleTabsNavSelect(key) } }>
                        <NavItem eventKey={1} >
                            <p style = { NavBarStyle.tabTitle }>Home</p>
                        </NavItem>
                        <NavItem eventKey={2}>
                            <p style = { NavBarStyle.tabTitle }>Articles</p>
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <div>
                            <img src = { logo } style = { NavBarStyle.profilePic } alt = 'profilePic'/>
                            <NavDropdown eventKey={3} title = ' ' id="basic-nav-dropdown" onSelect = { (key) => { this.handleUserNavSelect(key) } } style = { NavBarStyle.dropDown }>
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.4}>Separated link</MenuItem>
                            </NavDropdown>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;

