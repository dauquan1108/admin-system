import { all } from 'redux-saga/effects';

import watcherCore from './watcherCore';
import watcherAuthor from './author';

export default function* rootSagas() {
    yield all([
        
        // Liên quan đến cơ chế core ( Cơ chế core được xác định và quy chuẩn thống nhất giữa client - server)
        watcherCore.watcherGetList(), watcherCore.watcherAdd(), watcherCore.watcherRemove(), watcherCore.watcherUpdate(),
        
        // Liên quan đến cơ chế đăng nhập
        watcherAuthor.watcherLogin(), watcherAuthor.watcherCheckToken(),
    ]);
}