import React, { Component } from 'react';

import {Tabs, Tab} from 'material-ui/Tabs';

import RightTabStyles from '../../styles/navBar/RightTabsStyles';
import Utils from '../../utils/Utils';
import historyManager from '../../managers/HistoryManager';

class RightTabs extends Component {

    constructor(props) {
        super(props);

        console.log('RightTabs Props: ' + JSON.stringify(this.props));
        this.redirectTo = this.redirectTo.bind(this);
        this.redirectTo('/login', this.props);
    }

    redirectTo(url) {
        if(!Utils.objIsEmpty(this.props)) {
            historyManager.pushRoute(url, this.props);
        }
    }

    render() {
        return(
            <Tabs style={ RightTabStyles.tabs }>
                <Tab label='Login' onActive={ () => this.redirectTo('/login') }/>
                <Tab label='Sign Up'onActive={ () => this.redirectTo('/signUp') }/>
            </Tabs>
        );
    }
}

export default RightTabs;