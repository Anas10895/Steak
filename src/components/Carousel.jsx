import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
export default class Carousel1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    data:null

    };

  }
  componentDidMount() {
    fetch('https://www.mocky.io/v2/5185415ba171ea3a00704eed')
      .then((response) => response.json())
      .then((responseData) => {
        // console.log(responseData);
        // console.log(this.state.tilte)

        this.setState({
          data: responseData
        
        });
      });


  }
    render() {
      console.log(this.state.data)

        return (
            <div>
              <Carousel>
              <Carousel.Item>
              <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
                <img
                  className="d-block w-80 h-75"
                  src='https://images.unsplash.com/photo-1490983148012-96fffe2c3053?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=932&q=80'
                  alt="1 slide"
                  
                />
              
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-80 h-75"
                  src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60
                  "
                  alt="2 slide"
                />
    
              </Carousel.Item>
              <Carousel.Item>
                
                <img
                  className="d-block w-80 h-75"
                  src="https://images.unsplash.com/photo-1514483935006-b311818acf27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  alt="3 slide"
                />
    
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-80 h-75"
                  src="https://images.unsplash.com/photo-1493925410384-84f842e616fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"
                  alt="4 slide"
                />
    
              </Carousel.Item>

            </Carousel> 
            </div>
        )
    }
}

// https://api.unsplash.com/search/collections?query=coffeeshop&client_id=f99cf5e0d08bf12678d330c367ab611aa362f156833eef8d863708dfcedc70a3