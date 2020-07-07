import React, { Component } from 'react';
import Sample from './Sample';
import './Samples.css';

class Samples extends Component {
    state = {
        samples: [
            {"id":1, "sound":"Clap", "letter":'J'},
            {"id":2, "sound": "Snare","letter":"A"},
            {"id":3, "sound": "Kick","letter":"F"},
            {"id":4, "sound": "Hi-Hat","letter":"W"},
            {"id":5, "sound": "Tom","letter":"C"},
            {"id":6, "sound": "Crash","letter":"U"},
        ]
    }

    render() {

        return (
            <div className="main">
                <div className="wrapper">
                    { this.state.samples.map(sample => (
                        <Sample key={ sample.id } sample={ sample }/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Samples;
