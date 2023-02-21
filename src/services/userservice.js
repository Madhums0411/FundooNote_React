import axios from 'axios';

export const loginAPI = (data) =>{
   
    let response = axios.post('https://localhost:44315/api/User/Login',data)

    return response;
}