import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware()

export default createStore(reducers, compose(
    applyMiddleware(sagaMiddleware),
    composeWithDevTools()
));

sagaMiddleware.run(sagas);