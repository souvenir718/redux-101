import React, { useState } from 'react';
import { connect } from 'react-redux';

function Home({ toDos }) {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.text);
    };

    const onSubmit = (e) => {
        e.preventDefault();
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

export default connect(mapStateToProps)(Home);
