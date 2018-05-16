import React, { Component } from 'react';
import networkManager from '../../managers/NetworkManager';

class Home extends Component {

    constructor(props) {
        super(props);
        console.log('Home PROPS: ' + JSON.stringify(this.props));
        
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
            </div>
                
        );
    }
}

export default Home;