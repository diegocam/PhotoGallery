import React, { Component } from 'react';
import Photo from './Photo';

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
                {this.state.images.map((image) =>
                    <Photo image={image}/>
                )}
            </div>
        );
    }
}

export default PhotoGallery;
