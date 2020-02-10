import React, { useState } from 'react';
import './App.css';
import Characters from './components/Characters';
import MakeCharacters from './components/makeCharacters';

function App() {

    const [character, makeCharacter] = useState('');

    function handleCharacter(power) {

        makeCharacter(power);
    }

    return (
        <div className="App">
            <Characters handler={makeCharacter}/>
            <MakeCharacters characterState={character}/>
        </div>
    );
}

export default App;