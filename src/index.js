
//outsource dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import {Redirect, Route, Switch} from 'react-router';

// local dependencies
import './index.css';
import {LAYOUT_PUBLIC, LAYOUT_PRIVATE, logIn} from './constants/routes';
import PublicLayout from './public/index';
import PrivateLayout from './private/index';

const App = () => {
    // need to initialize app
    return (
        <BrowserRouter>
            <Switch>
                <Route path={LAYOUT_PUBLIC} component={PublicLayout} />
                <Route path={LAYOUT_PRIVATE} component={PrivateLayout} />
                {/* if no path match */}
                <Redirect to={logIn.link()} />
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />,
  document.getElementById('root')
);
