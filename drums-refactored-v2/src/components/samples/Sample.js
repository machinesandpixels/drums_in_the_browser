import React, { Fragment } from 'react';

const Sample = (props) => {
    const { sound, letter } = props.sample;
    
    return (
        <Fragment>
            <button className="drum">
                <h2> { sound } </h2>
                <span>{ letter }</span>
            </button>
        </Fragment>
        
    )
}

export default Sample;