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
import Book from "./components/Book";

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
                    <Book />
                </div>
            </Provider>
        );
    }
}

export default App;
