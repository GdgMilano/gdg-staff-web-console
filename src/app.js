import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import PrivateRoute from './containers/private-route'
import IndexPage from './pages/index-page'
import LoginPage from './pages/login-page'
import devfestPage from "./pages/devfest-page";
import partnersPage from "./pages/partners-page";
import sessionsPage from "./pages/sessions-page";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { getTheme } from './utils/get-theme'
import Auth from './containers/auth'
import './app.css'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getTheme()}>
        <BrowserRouter>
          <div>
            <Auth/>
            <PrivateRoute path="/" exact component={IndexPage}></PrivateRoute>
            <PrivateRoute path="/devfest" exact component={devfestPage}/>
              <PrivateRoute path="/partners" exact component={partnersPage}/>
              <PrivateRoute path="/sessions" exact component={sessionsPage}/>

              <Route path="/login" component={LoginPage}/>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

export default App
