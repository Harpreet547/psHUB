import { combineReducers } from 'redux'
import { NavBarElementsReducer } from '../components/navBar/NavBarReducers';
import { AppReducer } from '../components/AppReducers';
import { LoginReducer } from '../components/auth/login/LoginReducers';
import { AuthReducer } from '../components/auth/AuthReducers';

var rootReducer = combineReducers({
    NavBarElementsReducer,
    AppReducer,
    LoginReducer,
    AuthReducer
});

export default rootReducer;