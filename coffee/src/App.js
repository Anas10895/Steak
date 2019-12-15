import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap'
import { BrowserRouter , Switch, Route } from 'react-router-dom'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx' 
import Cart from'./components/Cart.jsx' 
import cart from './image/cart.png'
import Home from './components/Home'
export default class App extends Component {
  render() {
    return (
      <div>
        <>
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="/">Coffe X</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/Home">Home</Nav.Link>

    </Nav>

    <Nav.Link href="/Login">Login</Nav.Link>
    <Nav.Link href="/Register">Register</Nav.Link>
    <Navbar.Brand href="/Cart"><img src={cart} alt="cart"   height="40" /></Navbar.Brand>



  </Navbar>

  <BrowserRouter> 

<Switch>

 <Route  path="/" component={Home} />
 <Route  path="/Login" component={Login} />
 <Route  path="/Register" component={Register} />
 <Route path="/Cart" component={Cart}/>


 
</Switch>
</BrowserRouter> 


</>
      </div>
    )
  }
}


