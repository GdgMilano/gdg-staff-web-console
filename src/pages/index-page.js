import React, { Component } from 'react'
import Page from '../containers/page'
import Events from '../containers/events'

class IndexPage extends Component {
  render() {
    return (
      <Page>
        GDG Milano
        <Events/>
      </Page>
    )
  }
}

export default IndexPage