import { connect } from 'react-redux';

import Login from '../../components/auth/login/Login';
import { 
    setEmailHelpText, 
    setPasswordHelpText, 
    setEmailValidationState, 
    setPasswordValidationState,
    setProfilePic 
} from '../actions/LoginActions';

const mapDispatchToProps = dispatch => {
    return {
        setEmailHelpText: text => dispatch(setEmailHelpText(text)),
        setEmailValidationState: validationState => dispatch(setEmailValidationState(validationState)),
        setPasswordHelpText: text => dispatch(setPasswordHelpText(text)),
        setPasswordValidationState: validationState => dispatch(setPasswordValidationState(validationState)),
        setProfilePic: profilePicUrl => dispatch(setProfilePic(profilePicUrl))
    };
};

const mapStateToProps = state => {
    return {
        emailHelpText: state.LoginReducer.emailHelpText,
        passwordHelpText: state.LoginReducer.passwordHelpText,
        emailValidationState: state.LoginReducer.emailValidationState,
        passwordValidationState: state.LoginReducer.passwordValidationState,
        profilePicUrl: state.LoginReducer.profilePicUrl
    }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;