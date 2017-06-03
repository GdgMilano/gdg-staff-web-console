import React from 'react'
import PropTypes from 'prop-types'

const Events = ({ events }) => (
  <div>
    {
      events.map(event => {
        return (
          <div key={event.name}>{event.name}</div>
        )
      })
    }
  </div>
)

Events.propTypes = {
  events: PropTypes.array.isRequired
}
export default Events