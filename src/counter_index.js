import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

number.innerText = 0;

const ADD = 'ADD';
const MINUS = 'MINUS';

// reducer : change data
//  -> retun : application's data
const countModifier = (count = 0, action) => {
    switch (action.type) {
        case ADD:
            return count + 1;
        case MINUS:
            return count - 1;
        default:
            return count;
    }
};

const countStore = createStore(countModifier);

const onChange = () => {
    number.innerText = countStore.getState();
};

//변화사항
countStore.subscribe(onChange);

//action은 object, type이 필요
add.addEventListener('click', () => countStore.dispatch({ type: ADD }));
minus.addEventListener('click', () => countStore.dispatch({ type: MINUS }));
