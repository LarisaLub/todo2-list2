import { BOOK } from "../constants";

const defaultState = {
    book: null
};

export default (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case BOOK:
            return {
                ...state,
                book: payload
            };
        default:
            return state;
    }
};
