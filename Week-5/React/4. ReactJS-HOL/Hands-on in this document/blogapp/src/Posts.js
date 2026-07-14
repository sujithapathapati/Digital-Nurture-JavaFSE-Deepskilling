// src/Posts.js
import React, { Component } from 'react';

class Posts extends Component {
    constructor(props) {
        super(props);
        // Initialize state with an empty list of posts [cite: 21]
        this.state = {
            posts: [],
            hasError: false
        };
    }

    // Fetch API implementation to load post data [cite: 22]
    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts') // [cite: 23]
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                this.setState({ posts: data });
            })
            .catch(error => {
                alert("Error fetching posts: " + error.message);
            });
    }

    // Lifecycle hook triggered after component mounts [cite: 25]
    componentDidMount() {
        this.loadPosts(); // [cite: 25]
    }

    // Error boundary lifecycle hook to alert errors [cite: 29]
    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        alert("An error occurred in the component: " + error.message); // [cite: 29]
    }

    render() {
        if (this.state.hasError) {
            return <h2>Something went wrong displaying the posts.</h2>;
        }

        return (
            <div style={{ padding: '20px' }}>
                <h1>Blog Posts</h1>
                {/* Loop through posts and display title and body [cite: 27] */}
                {this.state.posts.map(post => (
                    <div key={post.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
                        <h3>{post.title}</h3> {/* [cite: 27] */}
                        <p>{post.body}</p> {/* [cite: 27] */}
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;