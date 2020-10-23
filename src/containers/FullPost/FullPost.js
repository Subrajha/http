import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
    state = {
        selectedposts: null
    }
    componentDidUpdate() {
        if ((!this.state.selectedposts && this.props.id) || (this.props.id && this.state.selectedposts && this.state.selectedposts.id !== this.props.id)) {
            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id).then(response => {
                this.setState({ selectedposts: response.data });
            });
        }

    }

    deletePost = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id).then(response => {
            console.log(response);
        });
    }
    render() {
        let post = <p className="FullPost">Please select a Post!</p>;
        if (this.props.id) {
            post = <p className="FullPost">Please select a Post!</p>;
        }
        if (this.state.selectedposts) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.selectedposts.title}</h1>
                    <p>{this.state.selectedposts.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePost}>Delete</button>
                    </div>
                </div>

            );
        }

        return post;
    }
}

export default FullPost;