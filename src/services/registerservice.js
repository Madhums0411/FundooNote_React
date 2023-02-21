import axios from "axios";

export const registerAPI = (register) =>{
    console.log("before")
    let response = axios.post("https://localhost:44315/api/User/Register",register)
    console.log("after")
    return response;
}