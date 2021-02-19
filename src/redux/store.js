import {createStore, combineReducers} from "redux";

//reducers
import {Tickets} from "./reducers/tickets";

const reducers = combineReducers({Tickets});

export const Store = createStore(reducers);