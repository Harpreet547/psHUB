import React, { Component } from 'react';

class SignUp extends Component {

    constructor(props) {
        super(props);
        console.log('SIGN UP PROPS: ' + JSON.stringify(this.props));
    }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
            </div>
                
        );
    }
}

export default SignUp;