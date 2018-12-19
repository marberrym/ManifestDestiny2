import React from 'react';

let platform = {
    1: <i className="xbox xboxsmall fab fa-xbox"></i>,
    2: <i className="ps4small ps4 fab fa-playstation"></i>,
    4: <i className="pcsmall pc fab fa-windows"></i>
}

let UserPanel = (props) =>
    <div className="userPanel" onClick={event => props.getProfile(props.user.membershipType, props.user.membershipId)}>
        <img className="profilePic" src={`https://www.bungie.net/${props.user.iconPath}`} />
        <div>
            <div>
                {platform[props.user.membershipType]}
                {props.user.displayName}
            </div>
        </div>
    </div>

export default UserPanel;