import React, { Component } from 'react';
import { Route } from 'react-router-dom'

//import appController from './controllers/AppController';
//import Auth from './components/auth/Auth';
import AuthContainer from './redux/containers/AuthContainer';
import NavBarContainer from './redux/containers/NavBarContainer';
import AppStyle from './AppStyle';
import HomeContainer from './redux/containers/HomeContainer';
import ArticlesContainer from './redux/containers/ArticlesContainer';
import AppConstants from './utils/AppConstants';
import ArticleContainer from './redux/containers/ArticlesContainer';

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
          <Route path={ AppConstants.routes.auth } component={ AuthContainer }/>
          <Route path={ AppConstants.routes.home } component={ HomeContainer }/>
          <Route path={ AppConstants.routes.articles } component={ ArticleContainer }/>
        </div>
      </div>
    );
  }
}

export default App;
