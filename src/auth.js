import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    withRouter,
    Redirect
} from 'react-router-dom';

import history from './history';

export const Auth = {
    isAuth: false,

    authenticate: ({name = '', pwd = '', cb = ()=>{}} = {}) => {
        if(name.toLocaleLowerCase() === 'ricky' && pwd === '123') {
            Auth.isAuth = true;
            console.log("Log in successfully.");
            setTimeout(cb, 100);
        }
        else {
            Auth.isAuth = false;
            console.log("User name or password is wrong!");
        }
    },

    authenticate1: ({name = '', pwd = ''}) => {
        console.log(this);
    },

    authenticate2: function({name = '', pwd = ''}) {
        console.log(this);
    }
}

// HOC
export const AuthRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        Auth.isAuth ? (<Component {...props} />) : 
        (<Redirect to={{pathname: '/error'}} />)
        )}
     />
)

