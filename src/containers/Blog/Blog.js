import React, { Component } from 'react';

//import Post from '../../components/Post/Post';
import Posts from '../Posts/Posts';
import './Blog.css';
//import axios from 'axios';
import axios from '../../hoe/axios';
import {Route,Link} from 'react-router-dom';
import NewPost from '../NewPost/NewPost';

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
                        <Link to="/"> Home</Link>
                        <Link to={{
                            pathname:this.props.match.url+"/new-post",
                            hash:"#submit",
                            search:"?quick-search=true"
                        }}> New Post</Link>
                    </ul>
                </div>
                {/* <Route path="/" exact render={()=><p>Home</p>}></Route> */}
                <Route path="/" exact component={Posts}></Route>
                <Route path="/new-post" exact component={NewPost}></Route>

               
            </div>
        );
    }
}

export default Blog;