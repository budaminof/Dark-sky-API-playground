import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import App from './components/app/App';
import NewSearch from './components/search/search';

class Router extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                  <App />
                    <Switch>
                        <Route exact path='/' component={ NewSearch }/>
                        <Redirect from='*' to='/'/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
};

export default Router;
