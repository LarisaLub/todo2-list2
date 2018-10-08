import { COMENTS, DELETE } from "../constants";
import { addComents, deleteComents } from "../AC";

const defaultState = {
    coments: []
};

export default (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case COMENTS: {
            console.log(state);
            return {
                ...state,
                coments: [...state.coments, payload]
            };
        }

        case DELETE: {
            console.log(state);
            return {
                ...state,
                coments: state.coments.filter(item => item !== payload)
            };
        }
    }

    return state;
};
