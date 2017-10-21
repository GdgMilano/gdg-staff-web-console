import React from 'react'
import PropTypes from 'prop-types'
import {Col } from 'glamorous-grid'
import { Card, CardMedia, CardText, CardActions } from 'material-ui/Card'
import glamorous, { Div } from 'glamorous'
import FlatButton from 'material-ui/FlatButton'
import SmartLink from '../components/SmartLink'

const Wrapper = glamorous.div({
  margin: 12
})

const Title = glamorous.div({
  fontSize: 20,
  fontWeight: 500,
  marginBottom: 8,
})

const Text = glamorous.div({
  color: 'rgba(0,0,0,0.54)',
  fontSize: 13,
  lineHeight: '20px'
})

const Section = ({ title, mediaUrl, text, linkText, linkUrl }) => (
    <Col span={{ xs: 12/12, md:6/12, lg: 4/12 }}>
  <Wrapper>
    <Card style={{ width: 296 }}>
      <CardMedia>
        <img src={mediaUrl}/>
      </CardMedia>
      <CardText>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </CardText>
      <CardActions>
        <Div display="flex" justifyContent="flex-end">
          <SmartLink href={linkUrl}>
            <FlatButton primary type="submit" label={linkText}/>
          </SmartLink>
        </Div>
      </CardActions>
    </Card>
  </Wrapper>
    </Col>
)
Section.propTypes = {
  title: PropTypes.string.isRequired,
  mediaUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired
}
export default Section