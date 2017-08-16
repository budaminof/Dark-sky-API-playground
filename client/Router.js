import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import App from './components/App';

class Router extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path='/' component={ App }/>
                        <Redirect from='*' to='/'/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
};

export default Router;
