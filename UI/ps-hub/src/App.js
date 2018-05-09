import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Login from './components/login/Login';
import SignUp from './components/signUp/SignUp';
import NavBarContainer from './redux/containers/NavBarContainer';
import AppStyle from './AppStyle';

class App extends Component {
  render() {
    return (
      <div className="App" style = { AppStyle.App }>
        {
          this.props.navBarVisible ? <NavBarContainer {...this.props}/> : null
        }
        
        <div className='main' style = { AppStyle.main }>
          <Route path='/login' component={ Login }/>
          <Route path='/signUp' component={ SignUp }/>
        </div>
      </div>
    );
  }
}

export default App;
