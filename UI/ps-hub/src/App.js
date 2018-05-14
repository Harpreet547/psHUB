import React, { Component } from 'react';
import { Route } from 'react-router-dom'

//import appController from './controllers/AppController';
//import Auth from './components/auth/Auth';
import AuthContainer from './redux/containers/AuthContainer';
import NavBarContainer from './redux/containers/NavBarContainer';
import AppStyle from './AppStyle';
import Home from './components/home/home';

class App extends Component {
  constructor(props) {
    super(props);
    //console.log('APP PROPS: ' + JSON.stringify(this.props));
  }

  render() {
    return (
      <div className="App" style = { AppStyle.App }>
        {
          this.props.navBarVisible ? <NavBarContainer {...this.props}/> : null
        }
        
        <div className='main' style = { AppStyle.main }>
          <Route path='/auth' component={ AuthContainer }/>
          <Route path='/home' component={ Home }/>
        </div>
      </div>
    );
  }
}

export default App;
