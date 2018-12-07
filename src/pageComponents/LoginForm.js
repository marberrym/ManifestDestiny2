import React, { Component } from 'react';
import '../stylesheets/loginForm.css';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            platform: "",
            username: "",
            password: "",
        }
    }

    toggle(platform) {
        if (platform === null) {
            this.setState({platform: ""})
        } else {
            this.setState({platform: platform})
        }
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
            <input type="text" placeholder="Username" value={this.state.username} onChange={
                event => this.setState({username: event.target.value})}
            ></input>
            <input type="password" placeholder="Password" value={this.state.password} onChange={
                event => this.setState({password: event.target.value})}
            ></input>
            <button className="loginBtn">Log In</button>
        </div>
    }
}

export default LoginForm;
