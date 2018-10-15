import { combineReducers } from "redux";
import titles from "./title";
import descrip from "./descrip";
import coments from "./coments";
import book from "./book";

export default combineReducers({
    titles,
    descrip,
    coments,
    book
});
