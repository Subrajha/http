import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.headers.common['Authorization']="AUTH-TOKENs";
axios.interceptors.response.use((response)=>{
    console.log(response);
    return response;
},error=>{
    console.log(error);
    return Promise.reject(error);
}
)

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
