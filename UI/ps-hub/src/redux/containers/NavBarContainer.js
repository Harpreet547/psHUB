import { connect } from 'react-redux';
import NavBar from '../../components/navBar/NavBar';
import {    
            setRightElement, 
            setLeftElement, 
            setBarTitle 
        } from '../actions/NavBarActions';

const mapDispatchToProps = dispatch => {
    return {
        setRightElement: element => dispatch(setRightElement(element)),
        setLeftElement: element => dispatch(setLeftElement(element)),
        setBarTitle: title => dispatch(setBarTitle(title))
    };
}

const mapStateToProps = state => {
    console.log(JSON.stringify(state));
    return {
        rightElement: state.NavBarElementsReducer.rightElement,
        leftElement: state.NavBarElementsReducer.leftElement,
        barTitle: state.NavBarElementsReducer.barTitle
    };
};

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);
export default NavBarContainer;