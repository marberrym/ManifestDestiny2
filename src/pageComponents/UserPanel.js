import React from 'react';

let UserPanel = (props) =>
    <div className="userPanel">
        <img className="profilePic" src={`https://www.bungie.net/${props.user.profilePicturePath}`} />
        <div>
            <div>{props.user.displayName}</div>
            <div>{props.user.userTitleDisplay}</div>
            {props.user.psnDisplayName ?
                <div className="ps4 ps4small"><i className="ps4 fab fa-playstation"></i>{props.user.psnDisplayName}</div>
            :
                null
            }
            {props.user.xboxDisplayName ?
                <div className="xbox xboxsmall"><i className="ps4 fab fa-xbox"></i>{props.user.xboxDisplayName}</div>
            :
                null
            }
            {props.user.blizzardDisplayName ?
                <div className="pc pcsmall"><i className="pc fab fa-windows"></i>{props.user.blizzardDisplayName}</div>
            :
                null
            }
        </div>
    </div>

export default UserPanel;