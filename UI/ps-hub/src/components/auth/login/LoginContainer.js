//@flow
import { connect } from 'react-redux';
import AppConstants from '../../../utils/AppConstants';
import Login from './Login';
import { 
    setEmailHelpText, 
    setPasswordHelpText, 
    setEmailValidationState, 
    setPasswordValidationState,
    setProfilePic 
} from './LoginActions';

const mapDispatchToProps = dispatch => {
    return {
        setEmailHelpText: (text: ?string) => dispatch(setEmailHelpText(text)),
        setEmailValidationState: (validationState: ?string) => dispatch(setEmailValidationState(validationState)),
        setPasswordHelpText: (text: ?string) => dispatch(setPasswordHelpText(text)),
        setPasswordValidationState: (validationState: ?string) => dispatch(setPasswordValidationState(validationState)),
        setProfilePic: (profilePicUrl: ?string) => dispatch(setProfilePic(profilePicUrl))
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