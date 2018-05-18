import { connect } from 'react-redux';
import { setNavBarVisibility } from '../actions/AppActions';
import App from '../../App';

const mapDispatchToProps = dispatch => {
    return {
        setNavBarVisibility: isVisible => dispatch(setNavBarVisibility(isVisible)),
    };
}

const mapStateToProps = state => {
    return {
        navBarVisible: state.AppReducer.navBarVisible,
    };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;