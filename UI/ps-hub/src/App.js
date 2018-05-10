import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Auth from './components/auth/Auth';
import NavBarContainer from './redux/containers/NavBarContainer';
import AppStyle from './AppStyle';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('APP PROPS: ' + JSON.stringify(this.props));
  }
  render() {
    return (
      <div className="App" style = { AppStyle.App }>
        {
          this.props.navBarVisible ? <NavBarContainer {...this.props}/> : null
        }
        
        <div className='main' style = { AppStyle.main }>
          <Route path='/auth' component={ Auth }/>
        </div>
      </div>
    );
  }
}

export default App;
