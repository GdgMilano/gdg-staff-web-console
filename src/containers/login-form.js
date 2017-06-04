import React, { Component } from 'react'
import { login } from '../firebase/actions'
import { withRouter } from 'react-router-dom';
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import { Card, CardText, CardActions } from 'material-ui/Card'
import glamorous, { Form, Div } from 'glamorous'
import logo from '../images/gdgmi_circle.min.jpg'

const Logo = glamorous.img({
  width: 100,
  height: 100,
  margin: '0 auto',
  paddingTop: '16px',
  display: 'block'
})

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = this.state
    if (email && password) {
      login(email, password)
        .then(res => {
          console.log(res)
        })
        .catch(err => console.error(err))
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Form
        margin="0 auto"
        width="300px"
        onSubmit={this.handleSubmit}
      >
        <Card>
          <Logo src={logo} alt=""/>
          <CardText>
            <div>
              <TextField floatingLabelText="email" name="email" type="email" onChange={this.handleChange}/>
            </div>

            <div>
              <TextField floatingLabelText="password" name="password" type="password" onChange={this.handleChange}/>
            </div>
          </CardText>

          <CardActions>
            <Div display="flex" justifyContent="flex-end">
              <FlatButton primary type="submit" label="login"/>
            </Div>
          </CardActions>
        </Card>
      </Form>
    )
  }
}

export default withRouter(LoginForm)