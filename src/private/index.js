
// outsource dependencies
import React from 'react';
import {Switch, Route, Redirect} from 'react-router';

// local dependencies
import User from './user/user';
import Welcome from './welcome/welcome';
import Layout from './layout/privat-layout';
import {USER, WELCOME} from '../constants/routes';

const PrivateLayout = () => {
    // here need to add check if user is authenticated
    // if not must redirect to 'public/log-in'
    return (
        <Layout>
            <Switch>
                <Route path={WELCOME.path}  component={Welcome}/>

                <Route path={USER.path} component={User}/>
                {/* if no path match */}
                <Redirect to={WELCOME.link()} />
            </Switch>
        </Layout>
    )
}

export default PrivateLayout;
