import React, { Component } from 'react';
import './App.css';
import PhotoGallery from './components/PhotoGallery';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [
                {
                    url: 'http://placekitten.com/g/800/500',
                    caption: 'Cat 1',
                },
                {
                    url: 'http://placekitten.com/800/500',
                    caption: 'Cat 2',
                },
                {
                    url: 'http://placekitten.com/g/800/500',
                    caption: 'Cat 3',
                }
            ]
        };
    }

    render() {
        return (
            <div className="App">
                <div className="header">
                    <h1>Photo Gallery</h1>
                    <p>Drag images from left to right to see them change.</p>
                </div>
                <PhotoGallery images={this.state.images} />
            </div>
        );
    }
}

export default App;
