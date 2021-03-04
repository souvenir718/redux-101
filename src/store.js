import { createStore } from 'redux';
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case addToDo.type:
//             console.log(action);
//             return [{ text: action.payload, id: Date.now() }, ...state];
//         case deleteToDo.type:
//             return state.filter((toDo) => toDo.id !== action.payload);
//         default:
//             return state;
//     }
// };

// 리턴할때는 새로운 state여야 한다.
// push는 mutate state
// filter는 return new state
const reducer = createReducer([], {
    [addToDo]: (state, action) => {
        state.push({ text: action.payload, id: Date.now() });
    },
    [deleteToDo]: (state, action) => state.filter((toDo) => toDo.id !== action.payload),
});

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

//redux dev tools
const store = configureStore({ reducer });
// const store = createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo,
};
export default store;
