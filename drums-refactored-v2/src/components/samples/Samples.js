import React, { Component } from 'react';
import Clap from './Clap';

class Samples extends Component {
    state = {
        samples: [
            {"Clap": 'J'},
            {"Snare": "A"},
            {"Kick": "F"},
            {"Hi-Hat": "W"},
            {"Tom": "C"},
            {"Crash": "U"},
        ]
    }

    render() {
        return (
            <div className="main">
                <Clap />
            </div>
        )
    }
}

export default Samples;
