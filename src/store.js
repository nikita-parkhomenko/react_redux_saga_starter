
// outsource dependencies
import {createBrowserHistory} from 'history';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

// local dependencies
import rootSaga from './sagas';
import rootReducer from './reducers'
// import pages from '../pages/reducers';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware(history))),
);

sagaMiddleware.run(rootSaga);

export default store;
