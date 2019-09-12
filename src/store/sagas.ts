import { fork } from 'redux-saga/effects'

import contactSagas from './contacts/sagas';

export default function* () {
    yield [fork(contactSagas)];
}