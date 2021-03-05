# Vanilla Redux



## Redux in Vanilla JS

```js
import { createStore } from 'redux'

// Action type
const ADD_TODO = 'ADD_TODO'

const addToDo = (text) => {
    return {
        type: ADD_TODO,
        text,
    }
}

// reducer function
const reducer = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO:
            const newToDo = {text: action.text, id: Date.now()};
            return [newToDoObj, ...state];
        default:
            return state;
    }
}

const store = createStore(reducer);

// dispatch action
const dispatchAddToDo = (text) => {
    store.dispatch(addToDo(text));
}

// state가 변경될때 실행될 함수 설정
store.subscribe(paintToDos);
```



## Redux in React

### 기본적인 Redux 사용 - store

```react
import { createStore } from 'redux';

// type 지정
const ADD = 'ADD';
const DELETE = 'DELETE';

const addToDo = (text) => {
    return {
        type: ADD,
        text,
    }
}

const reducer = (state = [], action) => {
    switch(action.type) {
        case ADD:
            return [{ text: action.text, id: Date.now() }, ...state];
        default:
            return state;
    }
}

const store = createStore(reducer);

export const actionCreators = {
    addToDo,
};
export default store;
```



### 기본적인 Redux 사용 - state 이용

```react
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
```

```react
// Home.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';
import { actionCreators } from '../store';

function Home({ toDos, addToDo }) {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addToDo(text);
        setText('');
    };
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {toDos.map((todo) => (
                    <ToDo key={todo.id} {...todo} />
                ))}
            </ul>
        </>
    );
}

//return -> props
function mapStateToProps(state, ownProps) {
    return { toDos: state };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        addToDo: (text) => dispatch(actionCreators.addToDo(text)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
```



### Redux Toolkit 사용 - store

```react
import { configureStore, createAction, createReducer, createSlice } from '@reduxjs/toolkit';

const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() });
        },
        remove: (state, action) => state.filter((toDo) => toDo.id !== action.payload),
    },
});

const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;
export default store;
```



### 기본적인 Redux 사용 - state 이용

```react
import React, { useState } from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';
import { add, remove } from '../store';

function Home({ toDos, addToDo }) {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addToDo(text);
        setText('');
    };
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {toDos.map((todo) => (
                    <ToDo key={todo.id} {...todo} />
                ))}
            </ul>
        </>
    );
}

//return -> props
function mapStateToProps(state, ownProps) {
    return { toDos: state };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        addToDo: (text) => dispatch(add(text)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
```



### [🏆 Certificate](https://github.com/souvenir718/TIL/blob/master/Certificate/%EC%B4%88%EB%B3%B4%EC%9E%90%EB%A5%BC%20%EC%9C%84%ED%95%9C%20%EB%A6%AC%EB%8D%95%EC%8A%A4%20101.pdf)