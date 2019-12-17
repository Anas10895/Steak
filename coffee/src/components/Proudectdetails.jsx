import React, { Component } from 'react';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
export default class ComponentDetails extends Component {
  state = {
    data: this.props.data,
  }

 


  render() {
    let  details = this.state.data.find((element) => {
      const { match: { params } } = this.props;
      
      return element.id == params.id
     
  })
  

    return (
      <div>
      
        <Container>
          <Row>
            <Col sm={6} elementType="card" >
              <Card.Img className="productDetailImage" variant="top" src={details.image} />
            </Col>
            <Col sm={4}>
              <Card.Body>
                <br></br>
    <Card.Title className="description">{details.name}</Card.Title>
                <br></br>
                <Card.Text className="description">
               {details.desc}
    </Card.Text>
             
                <style type="text/css">
                </style>
                <Button variant="secondary" onClick ={() => { this.props.handleCartToggle(details) } }>Add to Cart</Button>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}