import React, { Component } from 'react';
import './App.css';
import PhotoGallery from './components/PhotoGallery';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [
                {
                    url: '',
                    caption: '',
                },
                {
                    url: '',
                    caption: '',
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
