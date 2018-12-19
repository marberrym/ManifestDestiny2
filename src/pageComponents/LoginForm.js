import React, { Component } from 'react';
import '../stylesheets/loginForm.css';
import APIKey from '../APIKey';
import UserPanel from './UserPanel';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            platform: -1,
            username: "",
            users: [],
            user: [],
        }
    }

    toggle(platform) {
        if (platform === null) {
            this.setState({platform: -1})
        } else {
            this.setState({platform: platform})
        }
    }
    
    usersearch(platform, username) {
        fetch(`https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/${platform}/${username}/`, {
            headers: {
                "X-API-Key": APIKey,  
            },
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            this.setState({user: res.Response});
            if (res.Response.length > 0) {
                fetch(`https://www.bungie.net/Platform/Destiny2/${res.Response[0].membershipType}/Profile/${res.Response[0].membershipId}?components=200`,
                    {
                        headers: {
                            "X-API-Key": APIKey,  
                        }
                    })
                .then(res => res.json())
                .then(res => console.log(res))
            }
        })
    }

    getProfile(membership, ID) {
        fetch(`https://www.bungie.net/Platform/Destiny2/${membership}/Profile/${ID}?components=200`, {
            headers: {
                "X-API-Key": APIKey,  
            },
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            this.setState({user: res.Response})
        })

    }

    render() {
        return <div className="loginForm">
            <div className="platform">
                {
                    this.state.platform === 1 ?
                        <i className="xbox fab fa-xbox fa-3x selectxb" onClick={event => {
                            this.toggle()
                        }}></i>
                    :
                        <i className="xbox fab fa-xbox fa-3x" onClick={event => {
                            this.toggle(1)
                        }}></i>
                }
                {
                    this.state.platform === 2 ?
                        <i className="ps4 fab fa-playstation fa-3x selectps" onClick={event => {
                            this.toggle()
                        }}></i>
                    :
                        <i className="ps4 fab fa-playstation fa-3x" onClick={event => {
                            this.toggle(2)
                        }}></i>    
                }
                {
                    this.state.platform === 4 ?
                        <i className="pc fab fa-windows fa-3x selectpc" onClick={event => {
                            this.toggle()
                        }}></i>
                    :
                        <i className="pc fab fa-windows fa-3x" onClick={event => {
                            this.toggle(4)
                        }}></i>  
                }  
            </div>
            <input type="text" placeholder="Search Users" value={this.state.username} onChange={
                event => this.setState({username: event.target.value})}
            ></input>
            <button className="loginBtn" onClick={event => this.usersearch(this.state.platform, this.state.username)}>Search</button>
            {this.state.user.map(user => <UserPanel user={user} getProfile={this.getProfile}/>)} */}
        </div>
    }
}

export default LoginForm;
