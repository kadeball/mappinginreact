import React from "react";

const characters = [
    {
        name:'Cinder', power: 'fire', color: 'orange', age: 28, moves:["Trailblazer", "Inferno", "Fire Flash"]
},{
    name:'Aganos', power: 'rock', color: '#009999', age: 900000, moves:["Payload Assault", "Pulverize", "Ruin"]
}, {
    name:'Jago', power: 'Tiger Spirit', color: '#336699', age: 25, moves:["Edokuken", "Tiger Fury", "Wind Kick"]}
];

const myCharacters=[
    {
        name:"Eeyore",power:"Being sad",color:"blue",age:"92", moves:["sarcasm", "self-deprecating humor", "low self-esteem"]
    },
    {
        name:"Pooh Bear",power:"Being nice",color:"yellow",age:"56", moves:["happiness", "optimism", "rainbows"]
    },
    {
        name:"Tiger",power:"Energetic",color:"orange",age:"19", moves:["tail jump", "bipedal", "stripes"]
    }
];


function Characters({handler}){
    function click(power){
        handler(power);
    }
    function makeCharacters() {
        let characterDivs = characters.map(character => {
            let styles = {
                backgroundColor: character.color,
                height: "170px",
                width: "200px"
            };
            return <div style={styles}
                        onClick={() => click(character.power)}
            >
                <p>Name: {character.name}</p>
                <p>Power: {character.power}</p>
                <p>Age: {character.age}</p>
                <p>Special Moves: {character.moves}</p>
            </div>
        });
        return characterDivs;
    }

    function generateCharacters(){
        let characterDivs = myCharacters.map(character => {
            let styles={
                backgroundColor: character.color,
                height: "170px",
                width: "200px"
            };
            return <div style={styles}
                        onClick={() => click(character.power)}
            >
                <p>Name: {character.name}</p>
                <p>Power: {character.power}</p>
                <p>Age: {character.age}</p>
                <p>Special Moves: {character.moves}</p>

            </div>
        });
        return characterDivs;
    }
    return(
        <div>
            {makeCharacters()}
            {generateCharacters()}
        </div>

    )
}



export default Characters;