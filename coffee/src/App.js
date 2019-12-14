import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap'
import { BrowserRouter , Switch, Route } from 'react-router-dom'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
export default class App extends Component {
  render() {
    return (
      <div>
        <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Coffe X</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>

    </Nav>

    <Nav.Link href="/Login">Login</Nav.Link>
    <Nav.Link href="/Register">Register</Nav.Link>


  </Navbar>

  <BrowserRouter> 

<Switch>

 {/* <Route  path="/Home" component={Home} /> */}
 <Route  path="/Login" component={Login} />
 <Route  path="/Register" component={Register} />


 
</Switch>
</BrowserRouter> 


</>
      </div>
    )
  }
}


