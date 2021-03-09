import {createStore, combineReducers} from "redux";

//reducers
import {TicketsReducer} from "./reducers/tickets";

const reducers = combineReducers({TicketsReducer});

export const Store = createStore(reducers);