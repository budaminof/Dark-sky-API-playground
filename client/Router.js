import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import App from './components/app/App';
import Weather from './components/weather/weather';

class Router extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <App>
                  // <Switch>
                  //     <Route path='/weather' component={ Weather } />
                  //     <Redirect from='*' to='/'/>
                  // </Switch>
                </App>
            </BrowserRouter>
        );
    }
};

export default Router;
