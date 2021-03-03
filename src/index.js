import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

number.innerText = 0;

// reducer : change data
//  -> retun : application's data
const countModifier = (count = 0, action) => {
    if (action.type === 'ADD') {
        return count + 1;
    } else if (action.type === 'MINUS') {
        return count - 1;
    } else {
        return count;
    }
};

const countStore = createStore(countModifier);

const onChange = () => {
    number.innerText = countStore.getState();
};

//변화사항
countStore.subscribe(onChange);

add.addEventListener('click', () => countStore.dispatch({ type: 'ADD' }));
minus.addEventListener('click', () => countStore.dispatch({ type: 'MINUS' }));
