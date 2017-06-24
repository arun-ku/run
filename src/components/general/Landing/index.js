import React, { Component } from 'react';
import Login from './Login';
import './style.scss';

export default class Landing extends Component {
    render () {
        return (
            <div className="landing">
                <div className="play">Play</div>
                <Login />
            </div>
        );
    }
}