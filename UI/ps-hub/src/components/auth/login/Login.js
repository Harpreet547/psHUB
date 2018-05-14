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
import loginController from '../../../controllers/LoginController';
import historyManager from '../../../managers/HistoryManager';

class Login extends Component {
    constructor(props) {
        super(props);
        //console.log('Login Props: ' + JSON.stringify(this.props));

        this.onEmailValueChange = this.onEmailValueChange.bind(this);
        this.onPasswordValueChange = this.onPasswordValueChange.bind(this);
        this.enableSubmit = this.enableSubmit.bind(this);
        this.getProfilePic = this.getProfilePic.bind(this);
        this.onLoginTap = this.onLoginTap.bind(this);

    }
    
    componentDidMount() {
        this.enableSubmit(false);
        this.props.setEmailHelpText('');
        this.props.setEmailValidationState(null);
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
                loginComponent.enableSubmit(false);
            }else if(error) {
                loginComponent.props.setEmailHelpText('');
                loginComponent.props.setEmailValidationState(null);
                loginComponent.enableSubmit(false);
            }else if(response.userExist) {
                loginComponent.props.setEmailHelpText('User found');
                loginComponent.props.setEmailValidationState(AppConstants.formConstants.validationStates.success);
                loginComponent.props.setProfilePic(response.profilePic);
                loginComponent.enableSubmit(true);
            }else if(!response.userExist) {
                loginComponent.props.setEmailHelpText('User not found');
                loginComponent.props.setEmailValidationState(AppConstants.formConstants.validationStates.warning);
                loginComponent.enableSubmit(false);
            }
        });
        
    }

    onLoginTap(event) {
        const email = document.getElementById('emailInput').value;
        const password = document.getElementById('passwordInput').value;
        var loginObj = {
            email: email,
            password: password
        };
        loginController.login(loginObj, (response) => {
            console.log('Login success: ' + JSON.stringify(response));
            if(response.status) {
                historyManager.pushRoute('/home', this.props);
            }
        });
        return false;
    }

    

    getProfilePic() {
        if(this.props.profilePicUrl) {
            return this.props.profilePicUrl;
        }else {
            return backgroundImage;
        }
    }

    enableSubmit(isEnabled) {
        var submit = document.getElementById('loginBtn');
        if(isEnabled) {
            submit.disabled = false;
        }else {
            submit.disabled = true;
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
                        <img src = { this.getProfilePic() } style = { LoginStyle.image } alt = 'profilePic'/>    
                    </div>
                    <h2 style = { LoginStyle.title }>Login Account</h2>
                    <Form horizontal style = { LoginStyle.form }>
                        <FormGroup>
                            <Col
                                xs = { 6 } 
                                sm = { 6 } 
                                md = { 6 } 
                                lg = { 6 } >
                            <FormGroup validationState = { this.props.emailValidationState } style = { LoginStyle.formGroup }>
                                <ControlLabel>Login ID</ControlLabel>
                                <FormControl type="text" autoComplete = 'off' id = 'emailInput' onChange = { this.onEmailValueChange }/>
                                <HelpBlock>{ this.props.emailHelpText }</HelpBlock>
                            </FormGroup>
                            </Col>
                            <Col
                                xs = { 6 } 
                                sm = { 6 } 
                                md = { 6 } 
                                lg = { 6 } >
                            <FormGroup validationState = { this.props.passwordValidationState } style = { LoginStyle.formGroup }>
                                <ControlLabel>Password</ControlLabel>
                                <FormControl type="password" id = 'passwordInput' onChange = { this.onPasswordValueChange }/>
                                <HelpBlock>{this.props.passwordHelpText}</HelpBlock>
                            </FormGroup>
                            </Col>
                        </FormGroup>
                        
                        <FormGroup style = { LoginStyle.submitFormGroup }>
                            <Button bsSize = 'large' type = 'button' id = 'loginBtn'  style = { LoginStyle.submit } onClick = { this.onLoginTap }>Login</Button>
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