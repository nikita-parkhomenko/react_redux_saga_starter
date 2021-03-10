
// outsource dependencies
import React from 'react';
import {Switch, Route, Redirect} from 'react-router';

// local dependencies
import Welcome from './welcome/welcome';
import Layout from './layout/privat-layout';
import Employees from './employees/employees';
import {employees, welcome} from '../constants/routes';

const PrivateLayout = () => {
    // here need to add check if user is authenticated
    // if not must redirect to 'public/log-in'
    return (
        <Layout>
            <Switch>
                <Route path={welcome.path}  component={Welcome}/>

                <Route path={employees.path} component={Employees} />
                {/* if no path match */}
                <Redirect to={welcome.link()} />
            </Switch>
        </Layout>
    )
}

export default PrivateLayout;
