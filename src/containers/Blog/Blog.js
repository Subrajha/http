import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state = {
        posts: [],
        selectedId: null,
        error: null
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                const posts = response.data.splice(0, 4);
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
        this.setState({ selectedId: id });
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

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;