import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    withRouter
} from 'react-router-dom';

import history from './history';

const Calc = withRouter(({history}) => (
    <div>
        <h1>Caculator</h1>
        <button onClick={() => history.push('./')} >go to home</button>
    </div>
))

export default Calc;