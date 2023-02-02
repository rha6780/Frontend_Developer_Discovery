import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from './index';
import Error from './Error';

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
