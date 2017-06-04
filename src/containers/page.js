import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import { Div } from 'glamorous'

class Page extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    return (
      <div>
        <Header/>
        <Div
          marginTop="16"
        >
          {this.props.children}
        </Div>
      </div>
    )
  }
}

export default Page