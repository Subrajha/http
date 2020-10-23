import axios from 'axios';

const instance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
});
instance.defaults.headers.common['Authorization']="AUTH-TOKEN";

axios.interceptors.response.use((response)=>{
    console.log(response);
    return response;
},error=>{
    console.log(error);
    return Promise.reject(error);
}
)

export default instance;