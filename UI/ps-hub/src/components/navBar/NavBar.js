import React, { Component } from 'react';

import NavBarStyle from './NavBarStyle';
import NavBarElementConstants from '../../redux/reduxConstants/NavBarElementConstants';
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
                <Navbar.Collapse>
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

/*
<Grid style = { { background: AppConstants.appTheme.primaryColor, width: '100%', height: 50 } }>
                <Row>
                    <Col
                        xs = { 2 }
                        sm = { 1 }
                        md = { 1 } 
                        lg = { 1 }
                        style = { NavBarStyle.col }>
                        <img src = { logo } style = { NavBarStyle.BrandImage } alt = 'logo'/>
                    </Col>
                    <Col
                        xs = { 3 }
                        sm = { 1 }
                        md = { 1 } 
                        lg = { 1 }
                        style = { NavBarStyle.col }>
                        <p style = { NavBarStyle.BrandTitle }>{ this.props.barTitle }</p>
                    </Col>
                    <Col
                        xsHidden = { true } 
                        sm = { 1 }
                        md = { 1 } 
                        lg = { 1 }
                        style = { NavBarStyle.col }>
                        <a onClick = { () => { this.onNavItemTap(linkID.home) } } 
                            style = { this.state.home.onMouseOver === true ? NavBarStyle.menuLinkHover : NavBarStyle.menuLink } 
                            onMouseOver = { () => this.onMouseOver(linkID.home) } 
                            onMouseOut = { () => this.onMouseOut(linkID.home) }>
                                Home
                        </a>
                    </Col>
                    <Col
                        xsHidden = { true } 
                        sm = { 1 }
                        md = { 1 } 
                        lg = { 1 }
                        style = { NavBarStyle.col }>
                        <a onClick = { () => { this.onNavItemTap(linkID.article) } } 
                            style = { this.state.article.onMouseOver === true ? NavBarStyle.menuLinkHover : NavBarStyle.menuLink } 
                            onMouseOver = { () => this.onMouseOver(linkID.article) } 
                            onMouseOut = { () => this.onMouseOut(linkID.article) }>
                                Article
                        </a>
                    </Col>
                    <Col
                        xs = { 1 }
                        xsPush = { 4 }
                        smHidden = { true }
                        mdHidden = { true }
                        lgHidden = { true }
                        style = { NavBarStyle.col }>
                        <img src = { more } onClick = { this.toggleDropDown } style = { NavBarStyle.optionsIcon } alt = 'more'/>
                        {
                            this.state.moreDropDown.isVisible ?
                            (
                                <div>
                                    <MenuItem eventKey="1">Action</MenuItem>
                                    <MenuItem eventKey="2">Another action</MenuItem>
                                    <MenuItem eventKey="3">Something else here</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey="4">Separated link</MenuItem>
                                </div>
                            
                            ) : (
                                null
                            )
                        }
                    </Col>
                    <Col
                        xs = { 2 }
                        xsPush = { 4 }
                        sm = { 1 }
                        smPush = { 7 }
                        md = { 1 } 
                        mdPush = { 7 }
                        lg = { 1 }
                        lgPush = { 7 }
                        style = { NavBarStyle.col }>
                        <img src = { logo } style = { NavBarStyle.profilePic } alt = 'profilePic'/>
                    </Col>
                </Row>
            </Grid>
*/