import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap'
import { BrowserRouter , Switch, Route } from 'react-router-dom'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx' 
import Cart from'./components/Cart.jsx' 
import cart from './image/cart.png'
import Home from './components/Home'
import Map from './components/Map'
import Owneradd from './components/Owneradd'
import Checkout from './components/Checkout'
import Store from './components/Store'
import Update from './components/Update'
import Profile from './components/Profile'
import decode from 'jwt-decode'
import Proudectdetails from './components/Proudectdetails'



export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    data: null,
    store:[],
    cart: [],
    select:null,
    id:null
  }
  this.handleCartToggle = this.handleCartToggle.bind(this);

}
logout =()=>{
  console.log("logedOut")
  localStorage.removeItem('usertoken')

      }
      handleCartToggle =(select) =>{
        console.log('cart');
        console.log(this.state.cart)
    //  this.setState({cart: [...this.state.cart, select]})
    var temp = []
    temp = this.state.cart
    temp.push(select)
      this.setState({
       cart : temp,
        select : select,
        store:null
       })
       if(JSON.parse(localStorage.getItem("product_cart"))!=null){
       let temp = JSON.parse(localStorage.getItem("product_cart"));
           temp.push(select)
            this.setState({
              select:this.state.select})

          localStorage.setItem('product_cart', JSON.stringify(temp))
       } else {
         let temp = []
         temp.push(select)
         localStorage.setItem('product_cart', JSON.stringify(temp))
       }
      }
      componentDidMount() {
        fetch('https://pro4-backend.herokuapp.com/api/v1/stores/')
        .then(response => response.json())
      .then(res => this.setState({ store:res }));
      if(localStorage.usertoken){
        const decoded = decode(localStorage.usertoken)
        this.setState({id:decoded.user.role}) 
      }
      else{console.log("no token ")}
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
      {( this.state.id== "owner") ? (<Nav.Link  href='/Owneradd' >Owneradd</Nav.Link> ) : null }

      {(localStorage.usertoken) ? (<Nav.Link  href='/UpdatePassword' >UpdatePassword</Nav.Link> ) : null }

    {(localStorage.usertoken) ? (<Nav.Link  href='/Profile' >Profile</Nav.Link> ) : null }

      
    </Nav>
    {(!localStorage.usertoken) ? (<Nav.Link  href='/Login' >Login</Nav.Link> ) : null }

    {(!localStorage.usertoken) ? (<Nav.Link  href='/Register' >Register</Nav.Link> ) : null }

    
    {(localStorage.usertoken) ? (<Nav.Link  href='/' onClick={this.logout}>Logout</Nav.Link> ) : null }




    {(localStorage.product_cart) ? (<Navbar.Brand href="/Cart"><img src={cart}   height="40" /></Navbar.Brand>) : null }

  </Navbar>
  <BrowserRouter> 
<Switch>

 <Route  path="/Home" render={(props) => <Home {...props} name="ebere" store={(this.state.store.length > 0) ? this.state.store : null } />}/>/>
 
 <Route  path="/Profile" component={Profile} />

 <Route  path="/Login" component={Login} />
 <Route  path="/Register" component={Register} />
 {/* render={(props) => this.state.data !== null ? <Cart {...props} data={this.state.data} handleCartToggle = {this.handleCartToggle}  cart ={this.state.cart} /> : null} */}
 <Route path="/Cart" render={(props) => this.state.cart?  <Cart {...props} data={this.state.data} handleCartToggle = {this.handleCartToggle}  cart ={this.state.cart} /> : null}></Route>
 <Route path="/Map" component={Map}/>
 <Route path="/Owneradd" component={Owneradd}/>
 <Route path="/Checkout" component={Checkout}/>
 <Route path="/Store/:id" render={(props) => <Store {...props} name="ebere" store={(this.state.store.length > 0) ? this.state.store : null } />}/>/>
 <Route path="/Update" component={Update}/>

 
 <Route  path='/proudectdetails/:id' render={(props) => this.state.data == null ? <Proudectdetails {...props} data={this.state.data} handleCartToggle = {this.handleCartToggle}  select ={this.state.select} /> : null} />
</Switch>
</BrowserRouter> 
</>
      </div>
    )
  }
}