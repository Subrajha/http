import React, { Component } from 'react';

//import Post from '../../components/Post/Post';
import Posts from '../Posts/Posts';
import './Blog.css';
//import axios from 'axios';
import axios from '../../hoe/axios';
import {Route} from 'react-router-dom';

class Blog extends Component {
    state = {
        posts: [],
        selectedId: null,
        error: null
    }
   
    render() {
     

        return (
            <div>

                <div className="Navbar">
                    <ul>
                        <a className="active" href="/"> Home</a>
                        <a href="/new-post"> New Post</a>
                    </ul>
                </div>
                <Route path="/" exact render={()=><p>Home</p>}></Route>
               
            </div>
        );
    }
}

export default Blog;