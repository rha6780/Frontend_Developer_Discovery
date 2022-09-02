import React, { Component } from 'react';
import './asset/css/base.css';
import { Route, HashRouter as Router } from 'react-router-dom';
import { Home, QnA } from './pages/index';

export default class Base extends Component {

    render() {
        return (
            <Router>
                <Route path="/" exact component={Home} />
                <Route path="/QnA" component={QnA} />
            </Router>
        );
    }
}
