//@flow
import { connect } from 'react-redux';
import { setNavBarVisibility } from '../../AppActions';
import Article from './Article';
import {    
    setActiveTab 
} from '../../navBar/NavBarActions';

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

const ArticleContainer = connect(mapStateToProps, mapDispatchToProps)(Article);
export default ArticleContainer;