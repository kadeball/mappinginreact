import React, { useState, useEffect } from 'react';

function MakeCharacters ({ characterState }) {

    const [power, setPower] = useState('');

    useEffect(() => {
        setPower(characterState);
    });

    function condition() {

        let styles = {
            margin: '24px',
            padding: '12px',
            backgroundColor: 'green',
            maxWidth: '200px'
        };

        // don't show modal if nothing has been clicked yet
        if (power === '') {
            return;
        }
        else return <p style={styles}>My power is {power}</p>
    }

    return (
        <div>
            { condition() }
        </div>
    );

}

export default MakeCharacters;