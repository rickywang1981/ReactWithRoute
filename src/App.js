import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    withRouter
} from 'react-router-dom';

import {AuthRoute} from './auth';
import history from './history';
import Login from './login';
import Calc from './Calc';

const Links = () => (
    <nav>
        <Link to='/'>Login</Link>
        <sapn>&nbsp;&nbsp;</sapn>
        <Link to='/Calc'>Calculator</Link>
    </nav>
)

const Error = withRouter(({ history }) => (
    <div>
        <h1>Error</h1>
        <h3>you are not logged in yet</h3>
        <button onClick={() => history.push('./')} >Go back to Login</button>
    </div>
))

const App = () => (
    <Router history={history}>
        <div>
            <Links />
            <Route exact path='/' component={Login} />
            <Route path='/error' component={Error} />
            <AuthRoute path='/calc' component={Calc} />
        </div>
    </Router>
)

module.exports = App;