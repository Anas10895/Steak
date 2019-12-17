
import axios from "axios";
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
      .post("http://localhost:2551/api/v1/stores/5df8cc4d778c9a4e637c9664/items/newitem", newItem)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  export const Order = newOrder => {
    axios
     .post("/api/v1/users/5df8c917778c9a4e637c9663/orders/neworder", newOrder)
     .then(res => console.log(res))
     .catch(err => console.log(err));
 };