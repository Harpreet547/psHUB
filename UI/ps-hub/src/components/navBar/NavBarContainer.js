//@flow
import { connect } from 'react-redux';
import NavBar from './NavBar';
import {    
    setActiveTab,
    setBarTitle 
} from './NavBarActions';

const mapDispatchToProps = dispatch => {
    return {
        setBarTitle: (title: string) => dispatch(setBarTitle(title)),
        setActiveTab: (activeTab: number) => dispatch(setActiveTab(activeTab))
    };
}

const mapStateToProps = state => {
    return {
        barTitle: state.NavBarElementsReducer.barTitle,
        activeTab: state.NavBarElementsReducer.activeTab
    };
};

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);
export default NavBarContainer;