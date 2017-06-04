import React, { Component } from 'react'
import LoginForm from '../containers/login-form'
import { Div } from 'glamorous'

class LoginPage extends Component {
  render() {
    return (
      <Div display="flex" alignItems="center" height="100vh">
        <LoginForm/>
      </Div>
    )
  }
}

export default LoginPage