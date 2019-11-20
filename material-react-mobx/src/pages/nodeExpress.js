import React, { Component } from 'react';

class nodeExpress extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('/api/customers');
            const posts = await res.json();
            this.setState({
                posts
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                <h3>Express Test</h3>

                {this.state.posts.map(item => (
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <span>{item.job}</span>
                    </div>
                ))}
            </div>
        );
    }
}

export default nodeExpress;