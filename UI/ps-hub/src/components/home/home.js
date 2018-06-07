import React, { Component } from 'react';

class Home extends Component {

    constructor(props) {
        super(props);
        console.log('Home PROPS: ' + JSON.stringify(this.props));
        this.props.setNavBarVisibility(true);
        this.props.setActiveTab(1);
    }

    render() {
        return (
            <div style = { { marginTop: 60 } }>
                <h1>Home</h1>
            </div>
                
        );
    }
}

export default Home;