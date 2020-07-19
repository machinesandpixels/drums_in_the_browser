import React, { Component } from 'react';
import Play from './Play';
import Record from './Record';
import Stop from './Stop';
import './Controls.css';

class Controls extends Component {
    render() {
        return (
            <div className="controls">
                <Play />
                <Record />
                <Stop />
            </div>
        )
    }
}

export default Controls;

