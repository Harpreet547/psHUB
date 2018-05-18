import { connect } from 'react-redux';
import { setNavBarVisibility } from '../actions/AppActions';
import Article from '../../components/home/Articles/Article';
import {    
    setActiveTab 
} from '../actions/NavBarActions';

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

const ArticleContainer = connect(mapStateToProps, mapDispatchToProps)(Article);
export default ArticleContainer;