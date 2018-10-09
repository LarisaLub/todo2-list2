import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "../reduser";
import thunk from "redux-thunk";

const enhancer = composeEnhancers(applyMiddleware(thunk));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const sagaMiddleware = createSagaMiddleware();

//const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(reducer, {}, enhancer);
//sagaMiddleware.run(saga);

window.store = store;

export default store;
