import { DESCRIP, DELETE } from "../constants";

const defaultState = {
    descrip: []
};

export default (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case DESCRIP: {
            console.log(state);
            return {
                ...state,
                descrip: [...state.descrip, payload]
            };
        }
        case DELETE: {
            console.log(state);
            return {
                ...state,
                descrip: state.descrip.filter(item => item !== payload)
            };
        }
    }

    return state;
};
