
// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

//outsource dependencies
import ReactDOM from 'react-dom';
import React, {useEffect} from 'react';
import {Provider, useDispatch} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {Redirect, Route, Switch} from 'react-router';

// local dependencies
import store from './store';
import PublicLayout from './public/index';
import {TYPE} from './reducers/app-reducer';
import PrivateLayout from './private/index';
import {LAYOUT_PUBLIC, LAYOUT_PRIVATE, LOG_IN} from './constants/routes';

const App = () => {
    // need to initialize app
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: TYPE.INITIALIZE });
        return () => dispatch({ type: TYPE.CLEAR })
    }, []);

    return (
        <BrowserRouter>
            <Switch>
                <Route path={LAYOUT_PUBLIC} component={PublicLayout}/>
                <Route path={LAYOUT_PRIVATE} component={PrivateLayout}/>
                {/* if no path match */ }
                <Redirect to={LOG_IN.link ()}/>
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
