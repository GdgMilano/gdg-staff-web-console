import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import PrivateRoute from './containers/private-route'
import IndexPage from './pages/index-page'
import LoginPage from './pages/login-page'
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
            <PrivateRoute path="/" exact component={IndexPage}/>
            <Route path="/login" component={LoginPage}/>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

export default App
