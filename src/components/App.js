import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Deatil from '../routes/Deatil';
import Home from '../routes/Home';

export default function App() {
    return (
        <Router>
            <Route path="/" exact component={Home}></Route>
            <Route path="/:id" component={Deatil}></Route>
        </Router>
    );
}
