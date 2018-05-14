import { connect } from 'react-redux';
import { toggleNavBar } from '../actions/AppActions';
import App from '../../App';

const mapDispatchToProps = dispatch => {
    return {
        toggleNavBar: () => dispatch(toggleNavBar()),
    };
}

const mapStateToProps = state => {
    return {
        navBarVisible: state.AppReducer.navBarVisible,
    };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;