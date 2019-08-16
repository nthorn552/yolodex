import { call, put, takeLatest } from 'redux-saga/effects'
import { Card, GET_CARDS } from './cards/types';

// worker Saga: will be fired on GET_CARDS_REQUESTED actions
function* fetchCards(action: { type: typeof GET_CARDS }) {
    try {
        // TODO: fetch from API
        // TEMP: faking first card
        yield put({
            type: "GET_CARDS_SUCCEEDED",
            payload: [
                {
                    id: "id1",
                    name: "test1"
                }
            ]
        });
    } catch (e) {
        yield put({ type: "GET_CARDS_FAILED", message: e.message });
    }
}
/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
    yield takeLatest(GET_CARDS, fetchCards);
}

export default mySaga;