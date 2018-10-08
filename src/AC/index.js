import { TODO, REMOVE, DESCRIP, COMENTS, DELETE, FOTO, IS_FOTO } from "../constants";
import descrip from "../reduser/descrip";

export const addTodo = title => {
    return {
        type: TODO,
        payload: title
    };
};

export const addComentdescrip = descrip => {
    return {
        type: descrip,
        payload: descrip
    };
};

export const deleteTitle = title => {
    return {
        type: REMOVE,
        payload: title
    };
};

export const deleteDescrip = descrip => {
    return {
        type: DELETE,
        payload: descrip
    };
};

export const addDescrip = descrip => {
    return {
        type: DESCRIP,
        payload: descrip
    };
};

export const addComents = coments => {
    return {
        type: COMENTS,
        payload: coments
    };
};

export const deleteComents = coment => {
    return {
        type: DELETE,
        payload: coment
    };
};

export const addFoto = foto => {
    return {
        type: IS_FOTO,
        payload: foto
    };
};
