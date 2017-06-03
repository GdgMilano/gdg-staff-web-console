import React, { Component } from 'react'
import Page from '../containers/Page'
import LoginForm from '../containers/login-form'

class LoginPage extends Component {
  render() {
    return (
      <Page>
        <LoginForm/>
      </Page>
    )
  }
}

export default LoginPage