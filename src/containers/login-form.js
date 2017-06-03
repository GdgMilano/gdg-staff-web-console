import React, { Component } from 'react'
import { login } from '../firebase/actions'
import { withRouter } from 'react-router-dom';
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import { Form, Div } from 'glamorous'

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
          <CardTitle title="Login"/>
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
              <FlatButton primary type="submit" label="submit"/>
            </Div>
          </CardActions>
        </Card>
      </Form>
    )
  }
}

export default withRouter(LoginForm)