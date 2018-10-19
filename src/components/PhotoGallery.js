import React, { Component } from 'react';
import Photo from './Photo';

class PhotoGallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: this.props.images // images array: each image should have a "url" and "caption"
        };
        this.sliderStyle = {
            width: this.state.images.length * 800 // all images are 800 width
        };
    }

    render() {
        return (
            <div className="photo-gallery">
                <div className="slider" style={this.sliderStyle}>
                    {this.state.images.map((image, i) =>
                        <Photo key={i} image={image}/>
                    )}
                </div>
            </div>
        );
    }
}

export default PhotoGallery;
