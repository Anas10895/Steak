import React, { Component } from 'react'
import { Form, Button, FormControl} from 'react-bootstrap'

export default class Login extends Component {
    render() {
        return (
            <div>
              <h1>Login Page</h1>
                <Form>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
</Form>
<Button variant="primary" type="submit">
    Login
  </Button>
            </div>
        )
    }
}
