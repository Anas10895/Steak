import React, { Component } from 'react'
import { Form, Button, FormControl, Col} from 'react-bootstrap'

export default class Register extends Component {
    
    render() {
        return (
            <div>
                <h1>Register Page</h1>
                <Form>
                <Form.Row>
    <Form.Group as={Col} >
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="First Name" />
    </Form.Group>

    <Form.Group as={Col} >
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Last Name" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>


  </Form.Row>
  <Form.Row>

  <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Confirm Password" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" placeholder="Confirm Password" />
    </Form.Group>
    </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control type="text" placeholder="Jeddah" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select">
        <option>Macca</option>
        <option>Riyadh</option>
        <option>Ash-Sharqiyyah</option>

      </Form.Control>
    </Form.Group>


  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Agree ? " />
  </Form.Group>

  <Button variant="primary" type="submit">
  Register
  </Button>
</Form>
            </div>
        )
    }
}
