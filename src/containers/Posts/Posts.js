import React, { Component } from 'react';

import Post from '../../components/Post/Post';

//import axios from 'axios';
import axios from '../../hoe/axios';

class Posts extends Component {
    state = {
        posts: [],
    }
    componentDidMount() {
        axios.get('/posts')
            .then((response) => {
                const posts = response.data.splice(0, 4);
                console.log(response);
                const updatedposts = posts.map((data) => {
                    return {
                        ...data,
                        author: "max"
                    }
                })
                this.setState({ posts: updatedposts });
            })
            .catch(error => {
                this.setState({ error: error });
            });
    }
    selectedPostID(id) {
      //  this.setState({ selectedId: id });
      console.log(id);
    }
    render() {
        let posts;
        if (this.state.error) posts = <p>something wrong</p>
        else {
            posts = this.state.posts.map((res) => {
                return <Post
                    key={res.id}
                    title={res.title}
                    author={res.author}
                    clicked={() => this.selectedPostID(res.id)} />
            })
        }
        return ( <section className="Posts">
        {posts}
    </section>);
    }
}

export default Posts;