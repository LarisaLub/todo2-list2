import { IS_FOTO } from "../constants";

const defaultState = {
    fotos: []
};

export default (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case IS_FOTO: {
            return state;
        }
    }

    return state;
};
