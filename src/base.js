import React, { Component } from 'react';
import './asset/css/base.css';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Main } from './pages';

class Base extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" element={<Main />} />
                </Switch>
                <Link to="/QnA">
                    <button> 시작하기 </button>
                </Link>
            </Router>
        );
    }
}

export default Base;
