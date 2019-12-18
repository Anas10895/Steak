import React, { Component } from 'react'
import Carousel from './Carousel'
import {Card, Button} from 'react-bootstrap'
// import Map from './Map'

export default class Home extends Component {      
      
    render() {
      let products = []
      if(this.props.store !== null){
        products = this.props.store.map((item, index)=> 
          <Card key={index} style={{ width: "20rem" }}>
                <a href = {`/Store/${item._id}`}  ><Card.Img variant="top" src= {item.image} /></a>
  
                  <Card.Body>
                  <Card.Title>{item.store_name}</Card.Title>
                    <Card.Text> 
                  {item.desc}
                  </Card.Text>
                  <Card.Title>{item.store_city}</Card.Title>
                  <a href = {`/Store/${item._id}`} > <Button variant="secondary"  >Items list </Button></a> 
                </Card.Body>
        </Card>)
      }

      return (
            <div>

<Carousel/>
<hr/>
<div style={{ display: "grid", gridTemplateColumns: "repeat(3, 2fr)", gridGap: 20, margin:"auto"}}>
            {products}
         </div>
          </div>
        )
    }
}
