import React, { Component } from 'react';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';

export default class proudectdetails extends Component {
  state = {
    data: this.props.data,
    cart :this.props.cart,
    store:[],
      hla:"haai"

  }

      componentDidMount(){
        console.log(this.props);
        
          fetch(`https://pro4-backend.herokuapp.com/api/v1/items/${this.props.match.params.id}`)
          .then(response => response.json() )
          .then(res => this.setState({ store:res !== null ? res : "" }));
          
      }

  render() {
    console.log("params")
    console.log(this.state.store)
    // let  details = this.state.data.find((element) => {
      // const { match: { params } } = this.satte;

      // return element.id == params.id

 

    return (
      <div>
      
        <Container>
          {/* {console.log(details)} */}
          <Row>
            <Col sm={6} elementType="card" >
              <Card.Img className="productDetailImage" variant="top" src={this.state.store.image} />
            </Col>
            <Col sm={4}>
              <Card.Body>
                <br></br>


                <Card.Img variant="top" src= {this.state.store.item_image} />
    <Card.Title className="description">{this.state.store.item_name}</Card.Title>
                <br></br>
                <Card.Text className="description">
               {this.state.store.item_price } $
    </Card.Text>
             
                <style type="text/css">
                </style>
                <Button variant="secondary" onClick ={() => { this.props.handleCartToggle(this.state.store) } }>Add to Cart</Button>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}