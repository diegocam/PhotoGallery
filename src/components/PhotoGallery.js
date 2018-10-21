import React, { Component } from 'react';
import Photo from './Photo';

class PhotoGallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: this.props.images,  // images array: each image should have a "url" and "caption"
            sliderStyle: {
                width: this.props.images.length * 800,  // all images are 800 width
                marginLeft: 0
            }
        };
        this.sliding = false;
        this.startClientX = 0;
        this.onStart = this.onStart.bind(this)

    }

    onStart(e) {
        if (!this.sliding) {
            this.sliding = true;
            this.startClientX = e.clientX - this.state.sliderStyle.marginLeft;
        }
    }

    onMove(e) {
        if (this.sliding) {
            const deltaSlide = e.clientX - this.startClientX;
            this.setState(prevState => ({
                sliderStyle: { ...prevState.sliderStyle, 'marginLeft': deltaSlide }
            }))
        }
    }

    onEnd() {
        this.sliding = false;
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
