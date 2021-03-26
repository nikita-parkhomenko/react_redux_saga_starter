
// outsource dependencies
import { fork } from 'redux-saga/effects';

// local dependencies
import appSaga from './sagas/app-saga';
// import pages from './pages/sagas';

export default function * rootSaga() {
    // yield fork(pages);
    yield fork(appSaga);
}
