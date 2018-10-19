import React, { Component } from 'react';

class Photo extends Component {
    constructor() {
        super();
        this.state = {
            image: this.props.image
        }
    }

    render() {
        return (
            <div className="photo">
                <img src={this.state.image.url}/>
                <div className="caption">{this.state.image.caption}</div>
            </div>
        );
    }
}

export default Photo;
