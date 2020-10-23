import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
    state = {
        selectedposts: null
    }
    componentWillMount() {
        if ((!this.state.selectedposts && this.props.match.params.id) || (this.props.match.params.id && this.state.selectedposts && this.state.selectedposts.id !== this.props.match.params.id)) {
            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id).then(response => {
                this.setState({ selectedposts: response.data });
            });
        }

    }

    deletePost = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id).then(response => {
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