import React, { Component } from 'react';

class Article extends Component {

    constructor(props) {
        super(props);
        console.log('Article PROPS: ' + JSON.stringify(this.props));
        this.props.setNavBarVisibility(true);
        this.props.setActiveTab(2);
    }

    render() {
        return (
            <div>
                <h1>Article</h1>
            </div>
                
        );
    }
}

export default Article;