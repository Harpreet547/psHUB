import React, { Component } from 'react';
import { 
    Col, 
    Form, 
    FormGroup, 
    ControlLabel, 
    FormControl, 
    HelpBlock,
    Button 
} from 'react-bootstrap';
import backgroundImage from '../../../resources/auth/authBackground.jpg';
import LoginStyle from './LoginStyle';
import AppConstants from '../../../utils/AppConstants';
import networkManager from '../../../managers/NetworkManager';
import Utils from '../../../utils/Utils';

class Login extends Component {
    constructor(props) {
        super(props);
        console.log('Login Props: ' + JSON.stringify(this.props));
        this.onEmailValueChange = this.onEmailValueChange.bind(this);
        this.onPasswordValueChange = this.onPasswordValueChange.bind(this);
    }

    onEmailValueChange(event) {
        var value = event.target.value;
        var reqBody = {
            email: value
        };
        const url = AppConstants.urls.baseServiceUrl + '/auth/checkIfUserExist';
        var loginComponent = this;
        networkManager.performPostRequest(url, reqBody, function(error, response) {
            if(Utils.objIsEmpty(response)) {
                loginComponent.props.setEmailHelpText('');
                loginComponent.props.setEmailValidationState(null);
            }else if(error) {
                loginComponent.props.setEmailHelpText('');
                loginComponent.props.setEmailValidationState(null);
            }else if(response.userExist) {
                loginComponent.props.setEmailHelpText('User found');
                loginComponent.props.setEmailValidationState(AppConstants.formConstants.validationStates.success);
            }else if(!response.userExist) {
                loginComponent.props.setEmailHelpText('User not found');
                loginComponent.props.setEmailValidationState(AppConstants.formConstants.validationStates.warning);
            }
        });
        var submit = document.getElementById('submitBtn');
        if(event.target.value.length > 3) {
            submit.disabled = false;
            this.props.setEmailHelpText('User found');
            this.props.setEmailValidationState(AppConstants.formConstants.validationStates.success);
        }
    }

    onPasswordValueChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div style = { LoginStyle.root } className = 'root'>
                <div style = { LoginStyle.containerDiv } className = 'containerDiv'>
                    <div style = { LoginStyle.imageDiv } >
                        <img src = { backgroundImage } style = { LoginStyle.image }/>    
                    </div>
                    <h2 style = { LoginStyle.title }>Login Account</h2>
                    <Form horizontal style = { LoginStyle.form }>
                        <FormGroup>
                            <Col
                                xs = { 6 } 
                                sm = { 6 } 
                                md = { 6 } 
                                lg = { 6 } >
                            <FormGroup controlId="emailGroup" validationState = { this.props.emailValidationState } style = { LoginStyle.formGroup }>
                                <ControlLabel>Login ID</ControlLabel>
                                <FormControl type="text" autoComplete = 'off' onChange = { this.onEmailValueChange }/>
                                <HelpBlock>{ this.props.emailHelpText }</HelpBlock>
                            </FormGroup>
                            </Col>
                            <Col
                                xs = { 6 } 
                                sm = { 6 } 
                                md = { 6 } 
                                lg = { 6 } >
                            <FormGroup controlId="passwordGroup" validationState = { this.props.passwordValidationState } style = { LoginStyle.formGroup }>
                                <ControlLabel>Password</ControlLabel>
                                <FormControl type="password" onChange = { this.onPasswordValueChange }/>
                                <HelpBlock>{this.props.passwordHelpText}</HelpBlock>
                            </FormGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup style = { LoginStyle.submitFormGroup }>
                            <Button bsSize = 'large' id = 'submitBtn' type="submit" style = { LoginStyle.submit } disabled = { true }>Login</Button>
                        </FormGroup>
                    </Form>
                    <div style = { LoginStyle.signUpContainerDiv }>
                        <span style = { { margin: 'auto' } }>Not a member? <a style = { LoginStyle.signUpLink } href = '/auth/signUp'>Sign Up</a></span>
                    </div>
                </div>
            </div>
        );
    }

}

export default Login;