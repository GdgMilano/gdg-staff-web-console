import React, { Component } from 'react'
import User from './user'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import glamorous, { Div } from 'glamorous'
import logo from '../images/GDGMilanoW.svg'

const StyledLink = glamorous(Link)({
  textDecoration: 'none',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  height: '100%'
})

const Logo = glamorous.img({
  height: 40
})

class Header extends Component {

  render() {
    return (
      <div>
        <AppBar
          title={<StyledLink to="/"><Logo src={logo} alt="logo"/></StyledLink>}
          iconElementLeft={<span> </span>}
        >
          <Div color="white" display="flex" alignItems="center">
            <User render={user => {
              return <div>{user.email}</div>
            }}
            />
          </Div>
        </AppBar>
      </div>
    )
  }
}

export default Header