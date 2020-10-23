import React, { Component } from 'react';

//import Post from '../../components/Post/Post';
import Posts from '../Posts/Posts';
import './Blog.css';
//import axios from 'axios';
import axios from '../../hoe/axios';

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
                        <a href="/"> New Post</a>
                    </ul>
                </div>
                <Posts />
               
            </div>
        );
    }
}

export default Blog;