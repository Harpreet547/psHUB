import { combineReducers } from 'redux'
import { NavBarElementsReducer } from './NavBarReducers';
import { AppReducer } from './AppReducers';
import { LoginReducer } from './LoginReducers';

var rootReducer = combineReducers({
    NavBarElementsReducer,
    AppReducer,
    LoginReducer
});

export default rootReducer;