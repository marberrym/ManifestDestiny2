import React, { Component } from 'react';
import '../stylesheets/navBar.css';

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            avatar: "not yet"
        }
    }

    render() {
        return <div className="navBar">
            <img src="./assets/ghost.png" className="ghostNav"/>
        </div>
    }
}

export default NavBar;
