import { combineReducers } from 'redux'
import { NavBarElementsReducer } from './NavBarReducers';
import { AppReducer } from './AppReducers';
import { LoginReducer } from './LoginReducers';
import { AuthReducer } from './AuthReducers';
var rootReducer = combineReducers({
    NavBarElementsReducer,
    AppReducer,
    LoginReducer,
    AuthReducer
});

export default rootReducer;