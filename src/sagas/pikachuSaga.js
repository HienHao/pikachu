import {put, take, fork} from 'redux-saga/effects';
import * as ActionTypes from '../redux/actions/ActionTypes';

/**
 *
 * @returns {Generator<SimpleEffect<"TAKE", TakeEffectDescriptor>|SimpleEffect<"FORK", ForkEffectDescriptor<never>>, void, *>}
 * kiem tra click 2 element roi day sang worker xu ly
 * watcher lang nghe click 2 lan
 */

export function* watcherClickElementPikachu() {
    while(true) {
        // click element o row nao???
        const element1 = yield take(ActionTypes.CLICK_ELEMENT);
        const element2 = yield take(ActionTypes.CLICK_ELEMENT);
        yield fork(workerClickElementPikachu, element1, element2);
    }
    // --lan goi 1
    // lang nghe 2 lan
    // kiem tra type 2 element
    // neu thanh cong cho qua
    // neu khong thuc hien lai
    // -- lan goi 2 khi da thanh cong
    // can duoc goi lai ham de thuc hien nhung buoc o buoc 1
    // const element1 = yield take(ActionTypes.CLICK_ELEMENT);
    // const element2 = yield take(ActionTypes.CLICK_ELEMENT);
    // click 2 lan moi nhan duoc du lieu
    // yield fork(workerClickElementPikachu, element1, element2);
}

function* clickTwoElement() {

}

/**
 *
 * @param result
 * @returns {Generator<*, void, *>}
 * worker bien doi trang thai enable: true
 */

function* workerClickElementPikachu(element1, element2)  {
    console.log('Saga', element1, element2);
    // thuc hien click 2 elements
    // so sanh 2 type
    // neu 2 elements khac type ==> khong cho sang reducers
    // const element = yield call(() => checkTypeTwoElements(result.element));

    //~~~trường hợp gửi 2 element sang reducers
    if(element1.element.type === element2.element.type && element1.element.id !== element2.element.id) {
        yield put({type: ActionTypes.CLICK_ELEMENT_SUCCESS, element1, element2});
    }
    //~~~trong trường hợp chỉ bắn sang reducers 1 element ==.> chỉ thay đổi được 1 element trong state
    // yield put({type: ActionTypes.CLICK_ELEMENT_SUCCESS, result});
}
