import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';

import RightTabs from './RightTabs';

class NavBar extends Component {

    render() {
        return (
            <AppBar
                title='PS-HUB'
                showMenuIconButton={ false }
                iconElementRight={ <RightTabs {...this.props}/> }/>
                
        );
    }
}

export default NavBar;