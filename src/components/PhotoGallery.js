import React, { Component } from 'react';

class PhotoGallery extends Component {

    constructor(){
        super();
        this.state = {
            // images array: each image should have a "url" and "caption"
            images: this.props.images
        }
    }

    render() {
        return (
            <div className="photo-gallery">

            </div>
        );
    }
}

export default PhotoGallery;
