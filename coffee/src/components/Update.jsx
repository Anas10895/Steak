import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Alert } from 'react-bootstrap'
import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import SweetAlert from 'sweetalert2-react';
export default class ChangePassword extends Component {
    state = {
        wrong: false
    }
    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmitHandelr = (e) => {
        e.preventDefault()
        const decoded = jwt_decode(localStorage.usertoken)
        let id = decoded.user._id
        console.log(id);
        
        
        axios.put(`http://localhost:2551/api/v1/users/profile/${id}`, {

            password: this.state.newPassword,
            
        })
        this.props.history.push('/Profile')

    }
    componentDidMount() {
        const token = localStorage.usertoken
        if(token){
          const decoded = jwt_decode(token)
        this.setState(decoded.user)
        }else{
          this.props.history.push('/Login')
        }
      }
    
    render() {

        return (
            <div className="formcontainer">
                <SweetAlert
                    show={this.state.show}
                    title="Change Password"
                    text="the password has been changed"
                    onConfirm={() => {
                        this.props.history.push('/profile')
                        this.setState({ show: false })
                    }}
                />
                {this.state.wrong && ['danger'].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                        the old password not correct
                </Alert>
                ))}
                <div className="top">Change Password</div>
                <div className="form">
                    <Form onSubmit={this.onSubmitHandelr} noValidate>
                    <table className="table col-md-6 mx-auto">
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" name="password"
                                onChange={this.onChangeHandler} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="New Password" name="newPassword"
                                onChange={this.onChangeHandler} />
                        </Form.Group>
                        </table>
                            <Button variant='secondary' type="submit" >
                                Change Password </Button>
                    </Form>
                </div>
            </div>
        )
    }
}