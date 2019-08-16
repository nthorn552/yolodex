import { combineReducers } from "redux";
import cards from './cards/reducers';

const rootReducer = combineReducers({ cards });

export default rootReducer;
