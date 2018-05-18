import { connect } from 'react-redux';
import NavBar from '../../components/navBar/NavBar';
import {    
            setActiveTab,
            setBarTitle 
        } from '../actions/NavBarActions';

const mapDispatchToProps = dispatch => {
    return {
        setBarTitle: title => dispatch(setBarTitle(title)),
        setActiveTab: activeTab => dispatch(setActiveTab(activeTab))
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