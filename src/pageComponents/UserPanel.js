import React from 'react';
import PlayerCharacter from './PlayerCharacter';

let platform = {
    1: <i className="xbox xboxsmall fab fa-xbox"></i>,
    2: <i className="ps4small ps4 fab fa-playstation"></i>,
    4: <i className="pcsmall pc fab fa-windows"></i>
}

let UserPanel = (props) =>
    <div className="userPanel">
        <div>
            <div>
                {platform[props.user[0].membershipType]}
                {props.user[0].displayName}
            </div>
            {console.log(props.loading)}
            {console.log(props.characters)}
            {props.characters.length > 0 ?
                props.characters.map(char => <PlayerCharacter char={char}/>)
            :
                null
            }
        </div>
    </div>

export default UserPanel;