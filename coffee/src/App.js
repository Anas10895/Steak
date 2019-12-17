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
import Map from './components/Map'
import Proudectdetails from './components/Proudectdetails'
// import Landing from './components/Landing'
import DB from './db'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    data: DB.items,
  }
}
  render() {
    return (
      <div>
        <>
  <Navbar bg="light" variant="light" sticky ="top">
    <Navbar.Brand href="/">CafeX</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/Home">Home</Nav.Link>
      <Nav.Link href="/Map">Map</Nav.Link>
      {/* <Nav.Link href="/Landing">Landing</Nav.Link> */}
    </Nav>
    <Nav.Link href="/Login">Login</Nav.Link>
    <Nav.Link href="/Register">Register</Nav.Link>
    <Navbar.Brand href="/Cart"><img src={cart} alt="cart"   height="40" /></Navbar.Brand>
  </Navbar>
  <BrowserRouter> 
<Switch>
 <Route  path="/Home"  render={(props) => <Home {...props} data={this.state.data} />} />/>
 <Route  path="/Login" component={Login} />
 <Route  path="/Register" component={Register} />
 <Route path="/Cart" component={Cart}/>
 <Route path="/Map" component={Map}/>
 <Route exaxt path='/proudectdetails/:id' render={(props) => this.state.data !== null ? <Proudectdetails {...props} data={this.state.data} handleCartToggle = {this.handleCartToggle}  select ={this.state.select} /> : null} />
 {/* <Route path="/Landing" component={Landing}/> */}
</Switch>
</BrowserRouter> 
</>
      </div>
    )
  }
}