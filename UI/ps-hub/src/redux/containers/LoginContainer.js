import { connect } from 'react-redux';

import Login from '../../components/auth/login/Login';
import { 
    setEmailHelpText, 
    setPasswordHelpText, 
    setEmailValidationState, 
    setPasswordValidationState 
} from '../actions/LoginActions';

const mapDispatchToProps = dispatch => {
    return {
        setEmailHelpText: text => dispatch(setEmailHelpText()),
        setEmailValidationState: ValiditionState => dispatch(setEmailValidationState()),
        setPasswordHelpText: text => dispatch(setPasswordHelpText()),
        setPasswordValidationState: validationState => dispatch(setPasswordValidationState())
    };
};

const mapStateToProps = state => {
    return {
        emailHelpText: state.LoginReducer.emailHelpText,
        passwordHelpText: state.LoginReducer.passwordHelpText,
        emailValidationState: state.LoginReducer.emailValidationState,
        passwordValidationState: state.LoginReducer.passwordValidationState
    }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;