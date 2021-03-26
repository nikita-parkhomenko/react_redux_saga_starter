
// outsource dependencies
import React from 'react';
import {Switch, Route, Redirect} from 'react-router';

// local dependencies
import LogIn from './log-in/log-in';
import {LOG_IN} from '../constants/routes';

const PublicLayout = () => {
    return (
        <Switch>
            <Route path={LOG_IN.path} component={LogIn}/>

            <Redirect to={LOG_IN.link()} component={LogIn} />
        </Switch>
    )
};

export default PublicLayout;
