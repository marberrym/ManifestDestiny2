import React from 'react';
import { Link } from 'react-router-dom';

let classes = {
    0: "Titan",
    1: "Hunter",
    2: "Warlock"
}

let races = {
    0: "Human",
    1: "Awoken",
    2: "Exo"
}

let PlayerCharacter = (props) => 
    <Link to={`/character/${props.char.membershipType}/${props.char.membershipId}/${props.char.characterId}`} character={props}>
        <div className="characterPanel">
            {console.log(props)}
            <img src={`https://bungie.net/${props.char.emblemBackgroundPath}`} />
            <img src={`https://bungie.net/${props.char.emblemPath}`} />
            <div>{`Level ${props.char.baseCharacterLevel}`}</div>
            <div>{`Light ${props.char.light}`}</div>
            <div>{`${races[props.char.raceType]} ${classes[props.char.classType]}`}</div>
            <div></div>
        </div>
    </Link>

export default PlayerCharacter;