import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import Dialog from 'react-bootstrap-dialog'

export default class Cart extends Component {
  state = {
    cart: this.props.cart,


  };
  componentWillMount() {
   if (!localStorage.product_cart){
      this.props.history.push('/Home')
      
    }
      var cart = JSON.parse(localStorage.getItem("product_cart"));
      let temp = this.state.cart;
  
      // temp.push(this.state.cart)
      temp.push(cart);
      this.setState({ cart: temp });
    }

  
  
  
  render() {
   
    let elm =''
    let sum=0
  var cart = JSON.parse(localStorage.getItem("product_cart"));
    let group = cart.reduce((r, a) => {
      r[a.id] = [...(r[a.id] || []), a];
      return r;
    }, {});
    let cartelm = [];
    let j = 0;
    let total = [];
    for (let i in group) {
      cartelm.push(
        group[i].map(elm => {
          // console.log(elm);
          // console.log(elm.price)
          let price = elm.price * group[i].length;
          total.push(price);
          // console.log(group[i].length)
          if (group[i].indexOf(elm) == 0) {
            j++;
            return (
              <tr key={elm.id}>
                <td>{j}</td>
                <td>{elm.name}</td>
                <td>{group[i].length}</td>
                <td>{price} $</td>
              </tr>
            );
          }
        })
      );
    }
    // console.log(total)
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    sum = total.reduce(reducer);
    elm = cartelm.map(elm => {
      return elm;
    });
  

    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {elm}
            <tr>
              <td>Total </td>
              <td colSpan="3">
              {sum} $
              </td>
            </tr>
          </tbody>
        </Table>
        <Button onClick={this.Order}>Check Out</Button>
        <Dialog ref={(component) => { this.dialog = component }} />

       
      </div>
    );
  }
}
