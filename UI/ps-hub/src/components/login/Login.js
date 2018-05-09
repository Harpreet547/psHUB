import React, { Component } from 'react';
import loginStyle from './LoginStyle';
import { Grid, Row, Col } from 'react-bootstrap';
import backgroundImage from '../../resources/login/loginBackground.jpg';

class Login extends Component {

    render() {
        return (
            <Grid style = { loginStyle.root }>
                <Row className = 'show-grid' style = { loginStyle.heightFull }>
                    <Col 
                        xsHidden = { true } 
                        sm = { 8 } 
                        md = { 8 } 
                        lg = { 8 } 
                        style = { loginStyle.heightFull }>
                    <img src = { backgroundImage } style = { loginStyle.image } blurRadius = { 4 }/>
                    </Col>
                    <Col  
                        xs = { 12 } 
                        sm = { 4 } 
                        md = { 4 } 
                        lg = { 4 } 
                        style = { loginStyle.heightFull }>
                    </Col>
                </Row>
            </Grid>    
        );
    }
}

export default Login;