import jwtDecode from 'jwt-decode'

import axios from "axios";

export function shop (){
   let decToken = jwtDecode(localStorage.getItem('usertoken'))
   return decToken.user_id
}


export const register = newUser => {
  return axios
    .post("/api/v1/users/register", newUser)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
export const login = (user)=>{
    return axios.post("/api/v1/users/login", user)
    .then(token =>{
            console.log(token)
            if(token.data.token){
                localStorage.setItem('usertoken' , token.data.token) // localStorage in the browser
                return true
            }else if(token.data.error){
                return false
                
            }
       
        
    })
    .catch(err=>{
        console.log(err)
        return err
    }
        )
}
export const add = newItem => {
    return axios
      .put(`http://localhost:2551/api/v1/stores/${shop()}/items/newitem`, newItem)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
let id ="5df8c917778c9a4e637c9663"
  export const Order = newOrder => {
    axios
     .post("http://localhost:2551/api/v1/orders/neworder", newOrder)
     .then(res => console.log(res))
     .catch(err => console.log(err));
 };

//  Checkout