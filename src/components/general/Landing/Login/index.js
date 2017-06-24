import React, { Component } from 'react';
import './style.scss';

export default class Login extends Component {
    render () {
        return (
            <div className="loginDiv">
                <div className="input">
                    <span>Username:</span>
                    <input type="text" />
                </div>

                <div className="input">
                    <span>Password:</span>
                    <input type="password" />
                </div>

                <div className="button">
                    <button>Sign Up</button>
                    <button>Login</button>
                </div>
            </div>
        );
    }
}