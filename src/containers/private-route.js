import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import firebase from 'firebase'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    firebase.auth().currentUser ? (
      <Component {...props}></Component>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired
}

export default PrivateRoute