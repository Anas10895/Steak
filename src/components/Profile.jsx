import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      phonen: '',
      email: '',
      errors: {}
    }
  }
  componentDidMount() {
    const token = localStorage.usertoken
    if(token){
      const decoded = jwt_decode(token)
      console.log(decoded.user)
    this.setState(decoded.user)
    }else{
      this.props.history.push('/Login')
    }
  }
  render() {
    return (
      <div className="container">
        <div className="col-sm-8 mx-auto mt-5" style={{backgroundColor: '#17a2b8', padding: '0', color: 'white'}}>
        <div className="jumbotron" style={{borderRadius: '0'}}>
        <h1 className="profile-style">PROFILE</h1>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>First Name</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
              <tr>
               </tr>
            </tbody>
          </table>
          <button  className='submit-change' type="submit"><a  href="/Update" target="_blank" style={{color: 'white'}}>Change Password</a></button>
        </div>
        </div>
        <tr> 
        </tr>
      </div>
    )
  }
}
export default Profile