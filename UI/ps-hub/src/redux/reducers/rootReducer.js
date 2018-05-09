import { combineReducers } from 'redux'
import { NavBarElementsReducer } from './NavBarReducers';
import { AppReducer } from './AppReducers';

var rootReducer = combineReducers({
    NavBarElementsReducer,
    AppReducer
});

export default rootReducer;