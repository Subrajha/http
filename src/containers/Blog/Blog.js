import React, { Component } from 'react';

//import Post from '../../components/Post/Post';
import Posts from '../Posts/Posts';
import './Blog.css';
//import axios from 'axios';
import axios from '../../hoe/axios';
import {Route,NavLink} from 'react-router-dom';
import NewPost from '../NewPost/NewPost';
import  FullPost  from "../FullPost/FullPost";

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
                        <NavLink to="/" exact activeClassName="my-active" activeStyle={{textDecoration: 'underline'}}> Home</NavLink>
                        <NavLink to={{
                            pathname:"/new-post",
                            hash:"#submit",
                            search:"?quick-search=true"
                        }}> New Post</NavLink>
                    </ul>
                </div>
                {/* <Route path="/" exact render={()=><p>Home</p>}></Route> */}
                <Route path="/" exact component={Posts}></Route>
                <Route path="/new-post" exact component={NewPost}></Route>
                <Route path="/:id" exact component={FullPost}></Route>

               
            </div>
        );
    }
}

export default Blog;