import React, { Component } from 'react'
import Events from '../components/events'

const events = [
  {
    name: 'kassandra'
  },
  {
    name: 'dev-fest 2017'
  }
]

class EventsContainer extends Component {
  render() {
    return (
      <Events events={events}/>
    )
  }
}

export default EventsContainer