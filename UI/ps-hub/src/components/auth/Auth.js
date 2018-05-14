import React, { Component } from 'react';
import { 
    Grid, 
    Row, 
    Col
} from 'react-bootstrap';
import { Route } from 'react-router-dom'

import backgroundImage from '../../resources/auth/authBackground.jpg';
import authStyle from './AuthStyle';
import LoginContainer from '../../redux/containers/LoginContainer';
import SignUp from './signUp/SignUp';
import AuthController from '../../controllers/AuthController';
import authController from '../../controllers/AuthController';

class Auth extends Component {

    constructor(props) {
        super(props);
        console.log('AUTH PROPS: ' + JSON.stringify(this.props));
        this.getLatestAuthConstants = this.getLatestAuthConstants.bind(this);
        this.getLatestAuthConstants();
    }

    getLatestAuthConstants() {
        var auth = this;
        authController.getLatestAuthConstants(function(authConstants) {
          auth.props.setAuthConstants(authConstants);
        });
    }

    render() {
        return (
            <Grid style = { authStyle.root }>
                <Row className = 'show-grid' style = { authStyle.heightFull }>
                    <Col 
                        className = 'imageColumn'
                        xsHidden = { true } 
                        sm = { 6 } 
                        md = { 6 } 
                        lg = { 6 } 
                        style = { authStyle.heightFull }>
                    {/* <Blur img = { backgroundImage } style = { authStyle.image } blurRadius = { 100 }/> */}
                    <div style = { { height: '100%', width: '100%', background: 'black' } }>
                        <img src = { backgroundImage } style = { authStyle.image }/>
                        <div style = { authStyle.overlay } className = 'overlayDiv'>
                            <div style = { authStyle.infoDiv }>
                                <h1 style = { authStyle.title }>{ this.props.authConstants.appTitle }</h1>
                                <p style = { authStyle.text }>{ this.props.authConstants.descLine1 }</p>
                                <p style = { authStyle.text }>{ this.props.authConstants.descLine2 }</p>
                            </div>
                        </div>
                    </div>
                    </Col>
                    <Col  
                        className = 'loginFromColumn'
                        xs = { 12 } 
                        sm = { 6 } 
                        md = { 6 } 
                        lg = { 6 } 
                        style = { authStyle.heightFull }>
                        <div className = 'authForm' style = { authStyle.heightFull }>
                            <Route path = '/auth/login' component = { LoginContainer }/>
                            <Route path = '/auth/signUp' component = { SignUp }/>
                        </div>
                    </Col>
                </Row>
            </Grid>    
        );
    }
}

export default Auth;