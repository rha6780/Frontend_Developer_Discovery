import React, { Component } from 'react';
import './asset/css/base.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Home, Error } from './pages/index.js';

export default class Base extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="*" component={Error} />
                </Switch>
            </Router>
        );
    }
}
