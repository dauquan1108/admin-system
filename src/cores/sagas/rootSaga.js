import { all } from 'redux-saga/effects';

import watcherCore from './watcherCore';

export default function* rootSagas() {
    yield all([
        watcherCore.watcherGetList(), watcherCore.watcherAdd(), watcherCore.watcherRemove(), watcherCore.watcherUpdate()
    ]);
}