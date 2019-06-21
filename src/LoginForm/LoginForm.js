import React from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css'

export default class LoginForm extends React.Component {
    render() {
        return (
        <section className="login-form">
            <fieldset>
                <form>
                    <h2>Log In</h2>
                    <div className="user-log">
                        <label>Username: </label>
                        <input type="text"></input>
                    </div>
                    <div className="pass-log">
                        <label>Password: </label>
                        <input type="text"></input>
                    </div>
                    <button><Link to='list'>Log in</Link></button>
                </form>
            </fieldset>
        </section>
        )
    }
    
}