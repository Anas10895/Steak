import React, { Component } from 'react'
// import {Carousel} from 'react-bootstrap'
import Carousel from './Carousel'
import {Card, Button} from 'react-bootstrap'
import Map from './Map'
export default class Home extends Component {


    render() {
        const products = this.props.data.map((item)=> 
        <Card style={{ width: "20rem" }}>
       <a href = {`/proudectdetails/${item.id}`} ><Card.Img variant="top" src= {item.image} /></a>
       <Card.Body>
       <Card.Title>{item.name}</Card.Title>
         <Card.Text>
         {item.desc}
         </Card.Text>
         <Card.Title>{item.price}</Card.Title>
         <a href = {`/proudectdetails/${item.id}`} > <Button variant="secondary"  >Buy Now </Button></a>
       </Card.Body>
     </Card>
     )
        // console.log(this.props.data)

        return (
            <div>

<Carousel/>
<hr/>
<div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20, margin:"auto"}}>
            {products}
           {/* {console.log(this.props.data)} */}
         </div>
          </div>
        )
    }
}
