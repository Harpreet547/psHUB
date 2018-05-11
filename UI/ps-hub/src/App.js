import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import appController from './controllers/AppController';
//import Auth from './components/auth/Auth';
import AuthContainer from './redux/containers/AuthContainer';
import NavBarContainer from './redux/containers/NavBarContainer';
import AppStyle from './AppStyle';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('APP PROPS: ' + JSON.stringify(this.props));
    this.getLatestAppConstants = this.getLatestAppConstants.bind(this);
    this.getLatestAppConstants();
  }

  getLatestAppConstants() {
    var app = this;
    appController.getLatestAppConstants(function(appConstants) {
      app.props.setAppConstants(appConstants);
    });
  }

  render() {
    return (
      <div className="App" style = { AppStyle.App }>
        {
          this.props.navBarVisible ? <NavBarContainer {...this.props}/> : null
        }
        
        <div className='main' style = { AppStyle.main }>
          <Route path='/auth' component={ AuthContainer }/>
        </div>
      </div>
    );
  }
}

export default App;
