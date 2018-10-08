import { FOTO, IS_FOTO } from "../constants";

export default store => next => action => {
    const { type, payload } = action;
    if (type === IS_FOTO) {
        next({ type: FOTO, payload: payload });
        return;
    }
    console.log("foto", action);
    next(action);
};
