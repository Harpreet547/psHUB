import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
// import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(
  //applyMiddleware(...middleware),
  // other store enhancers if any
));

export default store;