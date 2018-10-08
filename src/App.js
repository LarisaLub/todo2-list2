import React, { Component } from "react";
import store from "./store";
import "./App.css";
import Todo from "./components/Todo";
import Data from "./components/Data";
import Datadescrip from "./components/Datadescrip";
import Coments from "./components/Coments";
import { Provider } from "react-redux";
import Descrip from "./components/Descrip";
import Comentdescrip from "./components/Comentdescrip";
import Foto from "./components/Foto";
import API from "./middleware/API";
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import saga from "./middleware/saga";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Todo />
                    <Data />
                    <Coments />
                    <Descrip />
                    <Datadescrip />
                    <Comentdescrip />
                    <Foto />
                    <API />
                    <saga />
                </div>
            </Provider>
        );
    }
}

export default App;
