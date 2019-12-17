import React, { Component } from 'react'
import { register }  from '../functionAuth/functionAuth'
import { Button, Checkbox, Form ,Container,Card } from 'semantic-ui-react'
import DatePicker from 'react-date-picker';

export default class Register extends Component {
  state = {
  };
  onChangHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmitHandelr = e => {
    e.preventDefault();
    register(this.state);
    this.props.history.push("/login");
  };
  onChange = date => this.setState({ date })
  render() {

    return (
      <div class="container">
        <Form onSubmit={this.onSubmitHandelr}>
          <h3 className="ttb">Sign Up</h3>
          <Form.Field className="form-group">
            <label className="tb">First name</label>
            <input
              placeholder="First Name"
              className="form-control"
              name="first_name"
              onChange={this.onChangHandler}
            />
          </Form.Field>
          <Form.Field className="form-group">
            <label className="tb">Last name</label>
            <input
              placeholder="Last Name"
              className="form-control"
              name="last_name"
              onChange={this.onChangHandler}
            />
          </Form.Field>
          <Form.Field className="form-group">
            <label className="tb">Email address</label>
            <input
              placeholder="email"
              className="form-control"
              name="email"
              onChange={this.onChangHandler}
            />
          </Form.Field>
          <Form.Field className="form-group">
            <label className="tb">Password</label>
            <input
              type="password"
              placeholder="password"
              className="form-control"
              name="password"
              onChange={this.onChangHandler}
            />
          </Form.Field>
          <Form.Field className="form-group">
            <label className="tb">Phone Number</label>
            <input
              type="phone"
              placeholder="Phone number"
              className="form-control"
              name="phone"
              onChange={this.onChangHandler}
            />
          </Form.Field>


          <Form.Field className="form-group">
            <label className="tb">Date of birth</label>
            <br />

          <DatePicker
          onChange={this.onChange}
          value={this.state.date}
        />
          </Form.Field>
          {/* <input type="checkbox"  onChange={this.onChangHandler} name="role" value="stylist"/>  I am a stylist<br/> */}
          <Button type="submit" className="btn btn-primary btn-block">
            Submit
          </Button>
          <p className="forgot-password text-right">
            Already registered <a href="/login" >sign in?</a>
          </p>
        </Form>
      </div>
    );
  }
}

