import { connect } from 'react-redux';

import Home from '../../components/home/Home';
import { setNavBarVisibility } from '../actions/AppActions';
import { setActiveTab } from '../actions/NavBarActions';

const mapDispatchToProps = dispatch => {
    return {
        setNavBarVisibility: isVisible => dispatch(setNavBarVisibility(isVisible)),
        setActiveTab: activeTab => dispatch(setActiveTab(activeTab))
    };
}

const mapStateToProps = state => {
    return {
        navBarVisible: state.AppReducer.navBarVisible,
        activeTab: state.NavBarElementsReducer.activeTab
    };
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;