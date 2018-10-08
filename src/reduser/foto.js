import { FOTO } from "../constants";

const defaultState = {
    fotos: []
};

export default (state = false, action) => {
    const { type, payload } = action;

    switch (type) {
        case FOTO: {
            return !state;
        }
    }

    return state;
};
