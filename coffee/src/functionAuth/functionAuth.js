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
      .put(`http://localhost:2551/api/v1/stores/5dfb0dadfdbdd40f3d6b2302/items/newitem`, newItem)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  export const Order = newOrder => {
    axios
     .post("http://localhost:2551/api/v1/orders/neworder", newOrder)
     .then(res => console.log(res))
     .catch(err => console.log(err));
 };
 export const change = user => {
    axios
     .put(`http://localhost:2551/api/v1/users/profile/${shop()}`, user)
     .then(res => console.log(res))
     .catch(err => console.log(err));
 };

//  Checkout