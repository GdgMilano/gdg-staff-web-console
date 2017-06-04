import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardText } from 'material-ui/Card'

const Events = ({ events }) => (
  <Card style={{ width: 800, margin: '0 auto' }}>
    <CardText>
      {
        events.map(event => {
          return (
            <div key={event.name}>{event.name}</div>
          )
        })
      }
    </CardText>
  </Card>
)

Events.propTypes = {
  events: PropTypes.array.isRequired
}
export default Events