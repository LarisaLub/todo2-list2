import { TODO, REMOVE, DESCRIP, COMENTS, DELETE, BOOK, IS_FOTO } from "../constants";
//import descrip from "../reduser/descrip";

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

export const Book = book => {
    return dispatch => {
        dispatch({
            type: BOOK,
            payload: book
        });

        fetch(`https://www.googleapis.com/books/v1/volumes?q=толстой`)
            .then(res => {
                return res.json();
            })
            .then(response =>
                dispatch({
                    type: BOOK,
                    payload: response.items
                })
            );
    };
};
