import {all} from 'redux-saga/effects';
import * as PikachuSaga from '../sagas/pikachuSaga';

export default function* rootSaga() {
    yield all([
        PikachuSaga.watcherClickElementPikachu(),
        PikachuSaga.watcherClickPosition(),
        PikachuSaga.watcherClickReplay(),
    ])
}