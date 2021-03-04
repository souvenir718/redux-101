import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

function Home({ toDos, addToDo }) {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.text);
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
            <ul></ul>
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
