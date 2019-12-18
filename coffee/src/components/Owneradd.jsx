import React, { Component } from 'react'
import { Button, Form  } from 'semantic-ui-react'
import { add }  from '../functionAuth/functionAuth'
import jwt_decode from 'jwt-decode'

export default class Owneradd extends Component {
    state = {
        
    };
    componentDidMount() {
        const decoded = jwt_decode(localStorage.usertoken)
        let id = decoded.user.role
                if(id == "owner" ){
                    alert("Hello Owner")
        this.setState(decoded.user)
        }else{
alert("you are just a user A USER")
          this.props.history.push('/Home')

        }
      }
    onChangHandler = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
    onSubmitHandelr = e => {
      e.preventDefault();
      add(this.state);
      this.props.history.push("/Home");
    };
    onChange = data => this.setState({ data })
    render() {
  
      return (
        <div>
         <h3 className="ttb">Add a Prodect</h3>

          <Form onSubmit={this.onSubmitHandelr}>
            <Form.Field className="form-group">
              <label className="tb">Item name</label>
              
              <input
                            className="form-control"

                placeholder="Item Name"
                name="item_name"
                onChange={this.onChangHandler}
              />
            </Form.Field>
            <Form.Field className="form-group">
              <label className="tb">Item Price</label>
              <input
                placeholder="Item Price"
                className="form-control"

                name="item_price"
                onChange={this.onChangHandler}
              />
            </Form.Field>
            <Form.Field className="form-group">
              <label className="tb">item Desc</label>
              <input
                            className="form-control"

                placeholder="item Desc"
                name="desc"
                onChange={this.onChangHandler}
              />
            </Form.Field>
            <Form.Field className="form-group">
              <label className="tb">item Image</label>
              <input
                            className="form-control"

                placeholder="item Image"
                name="item_image"
                onChange={this.onChangHandler}
              />
            </Form.Field>

            <Button type="submit" className="btn btn-primary btn-block">
              Submit
            </Button>
            
          </Form>
        </div>
      );
    }
  }
  
  