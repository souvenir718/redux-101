import { createStore } from 'redux';
import { createAction } from '@reduxjs/toolkit';

const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

const reducer = (state = [], action) => {
    switch (action.type) {
        case addToDo.type:
            console.log(action);
            return [{ text: action.payload, id: Date.now() }, ...state];
        case deleteToDo.type:
            return state.filter((toDo) => toDo.id !== action.payload);
        default:
            return state;
    }
};

// const ADD = 'ADD';
// const DELETE = 'DELETE';

// const addToDo = (text) => {
//     return {
//         type: ADD,
//         text,
//     };
// };
// const deleteToDo = (id) => {
//     return {
//         type: DELETE,
//         id: parseInt(id),
//     };
// };

// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case ADD:
//             return [{ text: action.text, id: Date.now() }, ...state];
//         case DELETE:
//             return state.filter((toDo) => toDo.id !== action.id);
//         default:
//             return state;
//     }
// };

const store = createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo,
};
export default store;
