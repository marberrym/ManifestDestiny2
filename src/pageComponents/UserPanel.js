import React from 'react';
import PlayerCharacter from './PlayerCharacter';

let platform = {
    1: <i className="xbox xboxsmall fab fa-xbox"></i>,
    2: <i className="ps4small ps4 fab fa-playstation"></i>,
    4: <i className="pcsmall pc fab fa-windows"></i>
}

let chars;

let UserPanel = (props) =>
    <div className="userPanel">
        <img className="profilePic" src={`https://www.bungie.net/${props.user[0].iconPath}`} />
        <div>
            <div>
                {platform[props.user[0].membershipType]}
                {props.user[0].displayName}
            </div>
            <div>
                {chars = Object.values(props.characters)}
                {console.log(chars)}
                {props.chars ?
                    chars.map(char => <PlayerCharacter pc={char}/>)
                :
                    null
                }
                {/* {chars.map(character => <PlayerCharacter pc={character}/>)} */}
            </div>
        </div>
    </div>

export default UserPanel;