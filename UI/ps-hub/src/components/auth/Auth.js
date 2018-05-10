import React, { Component } from 'react';
import { 
    Grid, 
    Row, 
    Col
} from 'react-bootstrap';
import { Route } from 'react-router-dom'
import Blur from 'react-blur';

import backgroundImage from '../../resources/auth/authBackground.jpg';
import authStyle from './AuthStyle';
import LoginContainer from '../../redux/containers/LoginContainer';

class Auth extends Component {
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
                                <h1 style = { authStyle.title }>PS-HUB</h1>
                                <p style = { authStyle.text }>PS-HUB is an interactive hub for ps owners.</p>
                                <p style = { authStyle.text }>PS-HUB© belongs to ABC.org.</p>
                                
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
                        </div>
                    </Col>
                </Row>
            </Grid>    
        );
    }
}

export default Auth;