import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import {Order} from "../functionAuth/functionAuth"
import Taples from "./Taples";
import { Item } from "semantic-ui-react";
export default class Cart extends Component {
  state = {
    cart: this.props.cart,
    redirect: false


  };
  componentDidMount() {
  
      var cart = JSON.parse(localStorage.getItem("product_cart"));
      let temp = this.state.cart;
  
      temp.push(cart);
      this.setState({ cart: temp });
    }
   
  
    onSubmitHandelr = e => {
      e.preventDefault();
      Order(this.state.Cart);
   
    localStorage.removeItem('product_cart')
            
      this.props.history.push("/Checkout");
    };
  
  render() {
   
    let elm =''
    let sum=0
  var cart = JSON.parse(localStorage.getItem("product_cart"));
  console.log(cart);
  
    // let group = cart.reduce((value, index) => {
    //   value[index.id] = [...(value[index.id] || []), index];
    //   return value;
    // }, {});
    // let cartelm = [];
    // let j = 0;
    // let total = [];
    // for (let i in group) {
    //   cartelm.push(
    //     group[i].map(elm => {
    //       let price = elm.item_price * group[i].length;
    //       total.push(price);
    //       if (group[i].indexOf(elm) === 0) {
    //         j++;
    //         return (
    //           <tr key={elm._id}>
    //             <td>{j}</td>
    //             <td>{elm.item_name}</td>
    //             <td>{group[i].length}</td>
    //             <td>{price} $</td>
    //           </tr>
    //         );
    //       }
    //     })
    //   );
    // }
    // console.log(total)
   
//     createdAt: "2019-12-17T12:49:11.638Z"
// item_available: true
// item_name: "Coffe"
// item_price: "5"
// updatedAt: "2019-12-17T12:49:11.638Z"
// __v: 0
// _id: "5df8cec7778c9a4e637c9666"
// __proto__: Object

    var taple = cart.map((Item ,i) =>{

      sum +=  Number(Item.item_price)
      return  <Taples i ={i} name= {Item.item_name} price = {Item.item_price} />
    })

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
            {/* {elm} */}
           {taple}
            <tr>
              <td>Total </td>
              <td colSpan="3">
              {sum} $
              </td>
            </tr>
          </tbody>
        </Table>
        <Button onClick={this.onSubmitHandelr  } >Check Out</Button>

       
      </div>
    );
  }
}
