import { combineReducers } from "redux";
import titles from "./title";
import descrip from "./descrip";
import coments from "./coments";
import foto from "./foto";

export default combineReducers({
    titles,
    descrip,
    coments,
    foto
});
