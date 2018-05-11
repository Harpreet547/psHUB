import { connect } from 'react-redux';

import Auth from '../../components/auth/Auth';

const mapStateToProps = state => {
    return {
        navBarVisible: state.AppReducer.navBarVisible,
        appConstants: state.AppReducer.appConstants
    };
}

const AuthContainer = connect(mapStateToProps)(Auth);
export default AuthContainer;
