//@flow
import React, { Component } from 'react';
import { 
    Grid, 
    Row, 
    Col
} from 'react-bootstrap';
import { Route } from 'react-router-dom'

import backgroundImage from '../../resources/auth/authBackground.jpg';
import authStyle from './AuthStyle';
import LoginContainer from './login/LoginContainer';
import SignUp from './signUp/SignUp';
import authController from '../../controllers/AuthController';
import AppConstants from '../../utils/AppConstants';

class Auth extends Component<AuthProps, null> {

    getLatestAuthConstants: () => void;
    setAuthBackground: () => string;

    constructor(props: AuthProps) {
        super(props);
        // console.log('AUTH PROPS: ');
        // console.log(this.props);
        this.getLatestAuthConstants = this.getLatestAuthConstants.bind(this);
        this.setAuthBackground = this.setAuthBackground.bind(this);
        this.getLatestAuthConstants();
    }

    getLatestAuthConstants() {
        var auth = this;
        authController.getLatestAuthConstants(function(authConstants) {
          auth.props.setAuthConstants(authConstants);
        });
    }

    setAuthBackground() {
        var background = this.props.authConstants.authBackground;
        if(background !== undefined && background !== null && background !== '') {
            return background;
        }else {
            return backgroundImage;
        }
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
                        <img src = { this.setAuthBackground() } style = { authStyle.image } alt = 'background'/>
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
                            <Route path = { AppConstants.routes.login } component = { LoginContainer }/>
                            <Route path = { AppConstants.routes.signup } component = { SignUp }/>
                        </div>
                    </Col>
                </Row>
            </Grid>    
        );
    }
}

export default Auth;