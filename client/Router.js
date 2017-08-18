import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import App from './components/app/App';

class Router extends PureComponent {
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
