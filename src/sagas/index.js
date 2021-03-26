
// outsource dependencies
import {fork} from 'redux-saga/effects';

// local dependencies
import appSaga from './app-saga';
import publicSagas from '../public/sagas';
// privateLayoutSagas

export default function* () {
    yield fork(appSaga);
    yield fork(publicSagas);
    // private
}
