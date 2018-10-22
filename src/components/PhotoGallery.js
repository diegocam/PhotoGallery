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
        this.sliderX = 0
        this.currImage = 1
    }

    onStart(e) {
        if (!this.sliding) {
            this.sliding = true
            this.startClientX = e.clientX
            this.startClientXDiff = e.clientX - this.sliderX
        }
    }

    onMove(e) {
        if (this.sliding) {
            this.distance = e.clientX - this.startClientX
            this.currSlide = e.clientX - this.startClientXDiff
            e.target.style.transform = "translateX(" + this.currSlide + "px)"
        }
    }

    onEnd(e) {
        if (this.sliding) {

            // allow change move distance if it is in range
            if (Math.abs(this.distance) > 100) {
                const sliderBounds = e.target.getBoundingClientRect();
                const galleryBounds = e.target.parentElement.getBoundingClientRect();

                // if left < 0, prevent drag
                if (this.currSlide > 0 && galleryBounds.left < sliderBounds.left) {
                    this.sliderX = 0
                    // if right > slider.leng prevent drag
                } else if (sliderBounds.right < galleryBounds.right) {
                    this.sliderX = -(this.state.images.length * this.imgWidth) + this.imgWidth
                } else {
                    this.sliderX = this.sliderX - (this.distance > 0 ? -800 : 800)
                }
            }

            e.target.style.transform = "translateX(" + this.sliderX + "px)"
            this.sliding = false
        }
    }

    render() {
        return (
            <div className="photo-gallery">
                <div className={"slider " + (this.sliding ? "test" : "anothe")}
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
