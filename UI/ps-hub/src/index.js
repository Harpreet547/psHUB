import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './components/AppContainer';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/Store';


ReactDOM.render(<Provider store={ store }>
                    <BrowserRouter>
                        <Route path='/' component={ AppContainer }/>
                    </BrowserRouter>
                </Provider>, document.getElementById('root'));
registerServiceWorker();
