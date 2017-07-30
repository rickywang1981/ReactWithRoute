import React from 'react';
import {
    BrowserRouter as Router,
    Redirect
} from 'react-router-dom';
import {Auth} from './auth.js';


class Login extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            name: '',
            pwd:'',
            redirectToCalc: false            
        }
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    handlePasswordChange = (event) => {
        this.setState({pwd: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const {name, pwd} = this.state;

        var cb = () => {
            this.setState({redirectToCalc:true});
            console.log(this.state);
        };

        Auth.authenticate({name, pwd, cb});
    }

    render() {
        const {redirectToCalc} = this.state;

        if(redirectToCalc) {
            console.log('Redirect to Caculator...');
            return (<Redirect to={{pathname:'/Calc'}} />);
        }

        return (
            <div>
            <h1>Please Enter Your Name and Password</h1>
            <form onSubmit={this.handleSubmit}>
            <div>Name: <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange} /></div>
            <div>Password: <input type="password" name="pwd" value={this.state.pwd} onChange={this.handlePasswordChange} /></div>
            <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}

module.exports = Login;