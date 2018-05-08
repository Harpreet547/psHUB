import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

//import NavBar from './components/navBar/NavBar';
import Login from './components/login/Login';
import SignUp from './components/signUp/SignUp';
import NavBarContainer from './redux/containers/NavBarContainer';
//<NavBar {...this.props}/>
class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={ getMuiTheme(lightBaseTheme) }>
        <div className="App">
          <NavBarContainer {...this.props}/>
          <div className='main'>
            <Route path='/login' component={ Login }/>
            <Route path='/signUp' component={ SignUp }/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
