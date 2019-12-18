import React, { Component } from 'react'
import {  Card, Button } from 'react-bootstrap';

export default class Store extends Component {
state={
    store:[]
}
    componentDidMount(){
        fetch(`http://localhost:2551/api/v1/stores/${this.props.match.params.id}/items`)
        .then(response => response.json())
        .then(res => this.setState({ store:res !== null ? res : "" }));
    }
    render() {
        console.log(this.state.store)
        let products = []
        if(this.state.store.length > 0){
            if(this.state.store !== null){
                products = this.state.store.map((item, index)=> 
                  <Card key={index} style={{ width: "20rem" }}>
                        <a href = {`/Proudectdetails/${item._id}`}  ><Card.Img variant="top" src= {item.item_image} /></a>
          
                          <Card.Body>
                          <Card.Title>{item.item_name}</Card.Title>
                            <Card.Text> 
                          {item.item_price}
                          </Card.Text>
                          <a href = {`/Proudectdetails/${item._id}`} > <Button variant="secondary"  >Item details </Button></a> 
                        </Card.Body>
                </Card>)
              }
               
            

        }
        
  
        return (
              <div>
  
  <hr/>
  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 2fr)", gridGap: 20, margin:"auto"}}>
              {products} 
           </div>
            </div>
          )
      }
    }
