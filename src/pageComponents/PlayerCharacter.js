import React from 'react';

let PlayerCharacter = (props) => 
    <div>
        {console.log(props)}
        <img src={`https://bungie.net/${props.char.emblemBackgroundPath}`} />
    </div>

export default PlayerCharacter;