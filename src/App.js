import React, { Component } from 'react';
import './App.css';
import PhotoGallery from './components/PhotoGallery';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [
                {
                    url: 'http://placekitten.com/800/500',
                    caption: 'Cat 1',
                },
                {
                    url: 'http://placekitten.com/g/800/500',
                    caption: 'Cat 2',
                }
            ]
        };
    }

    render() {
        return (
            <div className="App">
                <PhotoGallery images={this.state.images}/>
            </div>
        );
    }
}

export default App;
