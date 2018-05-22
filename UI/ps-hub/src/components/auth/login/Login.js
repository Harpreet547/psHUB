//@flow
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

class Login extends Component<LoginProps, null> {

    onEmailValueChange: (event: Event) => void;
    enableSubmit: (isEnabled: boolean) => void;
    onLoginTap: (event: Event) => void;
    getProfilePic: () => void;
    login: (loginObj: loginObjType) => void;

    constructor(props: LoginProps) {
        super(props);
        //console.log('Login Props: ');
        //console.log(this.props);

        this.onEmailValueChange = this.onEmailValueChange.bind(this);
        this.enableSubmit = this.enableSubmit.bind(this);
        this.getProfilePic = this.getProfilePic.bind(this);
        this.onLoginTap = this.onLoginTap.bind(this);
        this.login = this.login.bind(this);

        this.login({});
    }
    
    componentDidMount() {
        this.enableSubmit(false);
        this.props.setEmailHelpText('');
        this.props.setEmailValidationState(null);
    }

    onEmailValueChange(event: Event) {
        var value: ?string = '';
        if(event.target instanceof HTMLInputElement) {
            value = event.target.value
        }
        var reqBody = {
            email: value
        };
        var loginComponent = this;
        loginController.checkifUserExist(reqBody, (result) => {
            console.log(result);
            loginComponent.props.setEmailHelpText(result.emailHelpText);
            loginComponent.props.setEmailValidationState(result.emailValidationState);
            loginComponent.enableSubmit(result.enableSubmit);
            if(result.profilePicUrl != '') {
                loginComponent.props.setProfilePic(result.profilePicUrl);
            }
        });
    }

    onLoginTap(event: Event) {
        var emailField = document.getElementById('emailInput');
        var passwordField = document.getElementById('passwordInput');
        if(!(emailField instanceof HTMLInputElement) || !(passwordField instanceof HTMLInputElement)) {
            return;
        }
        const email = emailField.value;
        const password = passwordField.value;
        var loginObj = {
            email: email,
            password: password
        };
        this.login(loginObj);
        return false;
    }

    login(loginObj: loginObjType) {
        loginController.login(loginObj, (error, response) => {
            if(!error && response !== undefined && response !==  null) {
                if(response.status || response.error.errorCode === 303) { //303: Already logged in
                    historyManager.pushRoute('/home', this.props);
                }else {
                    if(response.error.errorCode !== 101) {
                        this.props.setEmailHelpText('Login Failed.');        
                        this.props.setEmailValidationState(AppConstants.formConstants.validationStates.error);
                    }
                }
            }else {
                this.props.setEmailHelpText('Login Failed.');
                this.props.setEmailValidationState(AppConstants.formConstants.validationStates.error);
            }
        });
    }

    getProfilePic() {
        if(this.props.profilePicUrl) {
            return this.props.profilePicUrl;
        }else {
            return backgroundImage;
        }
    }

    enableSubmit(isEnabled: boolean) {
        var submit = document.getElementById('loginBtn');
        if(submit instanceof HTMLButtonElement) {
            if(isEnabled) {
                submit.disabled = false;
            }else {
                submit.disabled = true;
            }
        }
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
                                <FormControl type="password" id = 'passwordInput'/>
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