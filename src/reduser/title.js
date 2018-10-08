import { REMOVE, TODO, DESCRIP, COMENTS, DELETE } from "../constants";
import { deleteTitle } from "../AC";
import { deleteDescrip } from "../AC";

const defaultState = {
    titles: []
};

export default (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case TODO: {
            return {
                ...state,
                titles: [...state.titles, payload]
            };
        }
        case REMOVE: {
            return {
                ...state,
                titles: state.titles.filter(item => item !== payload)
            };
        }
    }

    return state;
};
