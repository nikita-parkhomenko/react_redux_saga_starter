
// outsource dependencies
import {fork} from 'redux-saga/effects';

// local dependencies
import logInSaga from './log-in/saga';

export default function* () {
    yield fork(logInSaga);
}
