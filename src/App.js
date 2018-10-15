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
import Menu from "./components/ Menu";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
class App extends Component {
    render() {
        return (
            <Router>
                <Provider store={store}>
                    <div className="App">
                        <div>
                            <h2>
                                Menu
                                <div>
                                    <NavLink to="/coments">Coments</NavLink>
                                </div>
                                <div>
                                    <NavLink to="/descrip">Description</NavLink>
                                </div>
                                <div>
                                    <NavLink to="/add">Title</NavLink>
                                </div>
                                <div>
                                    <NavLink to="/books">Books</NavLink>
                                </div>
                            </h2>
                        </div>
                        <Route path="/coments" component={Coments} />
                        <Route path="/descrip" component={Descrip} />
                        <Route path="/title" component={Todo} />
                        <Route path="/books" component={Book} />
                    </div>
                </Provider>
            </Router>
        );
    }
}

export default App;
