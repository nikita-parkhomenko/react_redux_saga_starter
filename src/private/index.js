
// outsource dependencies
import React from 'react';
import {Switch, Route, Redirect} from 'react-router';

// local dependencies
import Welcome from './welcome/welcome';
import Projects from './projects/projects';
import Layout from './layout/privat-layout';
import Employees from './employees/employees';
import {employees, welcome, projects} from '../constants/routes';

const PrivateLayout = () => {
    // here need to add check if user is authenticated
    // if not must redirect to 'public/log-in'
    return (
        <Layout>
            <Switch>
                <Route path={welcome.path}  component={Welcome}/>

                <Route path={employees.path} component={Employees}/>
                <Route path={projects.path} component={Projects}/>
                {/* if no path match */}
                <Redirect to={welcome.link()} />
            </Switch>
        </Layout>
    )
}

export default PrivateLayout;
