import { Form } from "semantic-ui-react";
import React, { Component } from "react";
import { login } from "../functionAuth/functionAuth"
import { withRouter } from "react-router-dom";
class Login extends Component {
  state = {};
  onChangHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmitHandelr = async (e)=>{
    e.preventDefault()
    let logSuccess = await login(this.state)
    console.log(logSuccess)
    if(logSuccess ){
        this.props.history.push('/Home')
    }
    else{
      this.setState({ error : "Login error "})
  }
  }

  render() {
    return (
      <div class="container">
        <Form onSubmit={this.onSubmitHandelr}>
          <h3 className="ttb">Sign In</h3>
          <Form.Field className="form-group">
            <label className="tb">Email address</label>
            <input
              name="email"
              className="form-control"
              placeholder="email"
              onChange={this.onChangHandler}
            />
          </Form.Field>
          <Form.Field className="form-group">
            <label className="tb">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="password"
              onChange={this.onChangHandler}
            />
          </Form.Field>
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
          <p className="forgot-password text-right">
            <a href="/register"> Sign up </a>
          </p>
        </Form>
      </div>
    );
  }
}
export default withRouter(Login);