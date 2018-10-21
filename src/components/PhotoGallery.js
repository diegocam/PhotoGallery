import React, { Component } from 'react';
import Photo from './Photo';

class PhotoGallery extends Component {

    constructor(props) {
        super(props)
        this.imgWidth = 800
        this.state = {
            images: this.props.images,  // images array: each image should have a "url" and "caption"
            sliderStyle: {
                width: this.props.images.length * this.imgWidth,  // all images are 800 width
            }
        };
        this.sliding = false
        this.startClientX = 0
        this.deltaSlide = 0
    }

    onStart(e) {
        if (!this.sliding) {
            this.sliding = true
            this.startClientX = e.clientX - this.deltaSlide
        }
    }

    onMove(e) {
        if (this.sliding) {
            this.deltaSlide = e.clientX - this.startClientX
            if (this.deltaSlide <= 0) {
                e.target.style.transform = "translateX(" + this.deltaSlide + "px)"
            }
        }
    }

    onEnd() {
        this.sliding = false
    }

    render() {
        return (
            <div className="photo-gallery">
                <div className="slider"
                    style={this.state.sliderStyle}
                    onMouseDown={(e) => this.onStart(e)}
                    onMouseMove={(e) => this.onMove(e)}
                    onMouseUp={(e) => this.onEnd(e)}
                    onMouseOut={(e) => this.onEnd(e)}
                >
                    {this.state.images.map((image, i) =>
                        <Photo key={i} image={image} />
                    )}
                </div>
            </div>
        );
    }
}

export default PhotoGallery;
