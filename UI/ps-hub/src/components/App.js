//@flow
import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import AuthContainer from './auth/AuthContainer';
import NavBarContainer from './navBar/NavBarContainer';
import AppStyle from './AppStyle';
import HomeContainer from './home/HomeContainer';
import ArticleContainer from './home/Articles/ArticleContainer';
import AppConstants from '../utils/AppConstants';

class App extends Component<AppProps, null> {
  // eslint-disable-next-line 
  constructor(props: AppProps) {
    super(props);
    console.log('APP PROPS: ');
    console.log(this.props);
  }

  render() {
    return (
      <div className="App" style = { AppStyle.App }>
        {
          this.props.navBarVisible ? <NavBarContainer {...this.props}/> : null
        }
        
        <div className='main' style = { AppStyle.main }>
          <Route path={ AppConstants.routes.auth } component={ AuthContainer }/>
          <Route path={ AppConstants.routes.home } component={ HomeContainer }/>
          <Route path={ AppConstants.routes.articles } component={ ArticleContainer }/>
        </div>
      </div>
    );
  }
}

export default App;
