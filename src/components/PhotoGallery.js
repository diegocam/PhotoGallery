import React, { Component } from 'react';
import Photo from './Photo';

class PhotoGallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // images array: each image should have a "url" and "caption"
            images: this.props.images
        };
    }

    render() {
        return (
            <div className="photo-gallery">
                <div className="slider">
                    {this.state.images.map((image, i) =>
                        <Photo key={i} image={image}/>
                    )}
                </div>
            </div>
        );
    }
}

export default PhotoGallery;
