import React, { Component } from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase'

class User extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    ifNoUser: PropTypes.func
  }

  constructor() {
    super()

    this.state = {
      user: firebase.auth().currentUser
    }

    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        user
      })
    })
  }

  render() {
    const { user } = this.state
    const { ifNoUser } = this.props

    if (!user && ifNoUser) {
      return <div>{ifNoUser()}</div>
    }

    if (!user) {
      return null
    }

    return (
      <div>
        {this.props.render(user)}
      </div>
    )
  }
}

export default User