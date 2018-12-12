import React, { Component } from 'react';
import '../stylesheets/loginForm.css';
import APIKey from '../APIKey';
import UserPanel from './UserPanel';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            platform: "",
            username: "",
            users: [],
        }
    }

    toggle(platform) {
        if (platform === null) {
            this.setState({platform: ""})
        } else {
            this.setState({platform: platform})
        }
    }
    
    usersearch(user) {
        fetch(`https://www.bungie.net/Platform/User/SearchUsers?q=${this.state.username}`, {
            headers: {
                "X-API-Key": APIKey,  
            },
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            this.setState({users: res.Response});
        })
    }

    render() {
        return <div className="loginForm">
            <div className="platform">
                {
                    this.state.platform === "xbox" ?
                        <i className="xbox fab fa-xbox fa-3x selectxb" onClick={event => {
                            this.toggle()
                        }}></i>
                    :
                        <i className="xbox fab fa-xbox fa-3x" onClick={event => {
                            this.toggle("xbox")
                        }}></i>
                }
                {
                    this.state.platform === "ps4" ?
                        <i className="ps4 fab fa-playstation fa-3x selectps" onClick={event => {
                            this.toggle()
                        }}></i>
                    :
                        <i className="ps4 fab fa-playstation fa-3x" onClick={event => {
                            this.toggle("ps4")
                        }}></i>    
                }
                {
                    this.state.platform === "pc" ?
                        <i className="pc fab fa-windows fa-3x selectpc" onClick={event => {
                            this.toggle()
                        }}></i>
                    :
                    <i className="pc fab fa-windows fa-3x" onClick={event => {
                        this.setState({platform: "pc"})
                    }}></i>  
                }  
            </div>
            <input type="text" placeholder="Search Users" value={this.state.username} onChange={
                event => this.setState({username: event.target.value})}
            ></input>
            <button className="loginBtn" onClick={event => this.usersearch()}>Search</button>
            {this.state.users.map(user => <UserPanel user={user}/>)}
        </div>
    }
}

export default LoginForm;
