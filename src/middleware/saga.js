import createSagaMiddleware from "redux-saga";

export const sagaMiddleware = createSagaMiddleware();

export default [sagaMiddleware];

export function* helloSaga() {
    console.log("Hello Sagas!");
}
