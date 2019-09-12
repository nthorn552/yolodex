import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from "redux-devtools-extension";

import sagas from "./contacts/sagas";
import contacts, { ContactState } from './contacts/reducers';

export interface ApplicationState {
    contacts: ContactState;
}

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({ contacts });

export default createStore(rootReducer, compose(
    applyMiddleware(sagaMiddleware),
    composeWithDevTools()
));

sagaMiddleware.run(sagas);