import { connect } from 'react-redux';
import { toggleNavBar, setAppConstants } from '../actions/AppActions';
import App from '../../App';

const mapDispatchToProps = dispatch => {
    return {
        toggleNavBar: () => dispatch(toggleNavBar()),
    };
}

const mapStateToProps = state => {
    return {
        navBarVisible: state.AppReducer.navBarVisible,
        appConstants: state.AppReducer.appConstants
    };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;