import { connect } from 'react-redux';

import Auth from '../../components/auth/Auth';
import { setAuthConstants } from '../actions/AuthActions';

const mapDispatchToProps = dispatch => {
    return {
        setAuthConstants: authConstants => dispatch(setAuthConstants(authConstants))
    };
}

const mapStateToProps = state => {
    return {
        authConstants: state.AuthReducer.authConstants
    };
}

const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth);
export default AuthContainer;
