import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "../reduser";
import api from "../middleware/API";
import saga from "../middleware/saga";

const thunk = applyMiddleware(api);
//const sga = applyMiddleware(saga);

export const store = createStore(reducer, thunk);

window.store = store;

export default store;
