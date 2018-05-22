//@flow
import { connect } from 'react-redux';

import Home from './Home';
import { setNavBarVisibility } from '../AppActions';
import { setActiveTab } from '../navBar/NavBarActions';

const mapDispatchToProps = dispatch => {
    return {
        setNavBarVisibility: (isVisible: boolean) => dispatch(setNavBarVisibility(isVisible)),
        setActiveTab: (activeTab: number) => dispatch(setActiveTab(activeTab))
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