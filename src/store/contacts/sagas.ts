import { put, takeLatest, delay } from 'redux-saga/effects'
import { GET_CONTACTS, GET_CONTACTS_ERROR } from './types';
import { getContactsSuccess } from './actions';

function* fetchContacts(action: { type: typeof GET_CONTACTS }) {
    try {
        // TODO: fetch from API
        yield delay(3000);
        yield put(getContactsSuccess([
            {
                id: "id1",
                name: "test1"
            },
            {
                id: "id2",
                name: "test2"
            }
        ]));
    } catch (e) {
        yield put({ type: GET_CONTACTS_ERROR, message: e.message });
    }
}

function* contactSagas() {
    yield takeLatest(GET_CONTACTS, fetchContacts);
}

export default contactSagas;