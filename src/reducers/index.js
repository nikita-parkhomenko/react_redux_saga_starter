
import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import {createBrowserHistory} from 'history';
import { connectRouter } from 'connected-react-router'

import appReducer from './app-reducer';
import publicReducers from '../public/reducers'
// import privateLayout reducers

export const history = createBrowserHistory();

// connect
const rootReducer = combineReducers({
    form,
    appReducer,
    ...publicReducers,
    // ...privateLayoutReducers
    router: connectRouter(history),
});

export default rootReducer;
