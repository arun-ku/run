import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
    Landing,
    PlayingBoard
} from '../../general'

export default class App extends Component {
    render () {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Landing} />
                    <Route path="/playing" component={PlayingBoard} />
                </div>
            </Router>
        );
    }
}