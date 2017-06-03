import { Component } from 'react'
import firebase from 'firebase'
import { withRouter } from 'react-router-dom'

class Auth extends Component {
  constructor() {
    super()
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push('/')
      }
    })
  }

  render() {
    return null
  }
}

export default withRouter(Auth)