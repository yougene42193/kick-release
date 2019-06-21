import React from 'react';
import { Link } from 'react-router-dom';
import './RegisterForm.css'

export default class RegisterForm extends React.Component {
    render() {
        return (
            <section className="register-form">
                <fieldset>
                    <form>
                        <h2>Get Started</h2>
                        <div className="user-reg">
                            <label>Username: </label>
                            <input type='text' placeholder='username'></input>
                        </div>
                        <div className="pass-reg">
                            <label>Password: </label>
                            <input type='text' placeholder='password'></input>
                        </div>
                        <button><Link to='/login'>Register</Link></button>
                    </form>
                </fieldset>
            </section>
        )
    }
}