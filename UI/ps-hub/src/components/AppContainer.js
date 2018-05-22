//@flow
import { connect } from 'react-redux';
import { setNavBarVisibility } from './AppActions';
import App from './App';

const mapDispatchToProps = dispatch => {
    return {
        setNavBarVisibility: (isVisible: boolean) => dispatch(setNavBarVisibility(isVisible)),
    };
}

const mapStateToProps = state => {
    return {
        navBarVisible: state.AppReducer.navBarVisible,
    };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;