import React, { Fragment } from 'react';
import './Sample.css';

const Sample = (props) => {
    const { sound, letter } = props.sample;

    return (
        <Fragment>
            <button  onClick={ props.playSound } className="drum">
                <h2> { sound } </h2>
                <span>{ letter }</span>
            </button>
        </Fragment>
        
    )
}

export default Sample;