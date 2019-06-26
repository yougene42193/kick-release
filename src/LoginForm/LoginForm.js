import React from 'react';
import './LoginForm.css'
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';

export default class LoginForm extends React.Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }

    state = { error: null }

    handleSubmitJwtAuth = e => {
        e.preventDefault()
        this.setState({ error: null })
        const { user_name, password } = e.target

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value
        })
            .then(res => {
                user_name.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.props.onLoginSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    render() {
        const { error } = this.state
        return (
        <section className="login-form">
            <fieldset>
                <form
                    onSubmit={this.handleSubmitJwtAuth}
                >
                    <div role="alert">
                        {error && <p className="error-msg">Incorrect username or password</p>}
                    </div>
                    <h2>Log In</h2>
                    <div className="user-log">
                        <label>Username: </label>
                        <input name='user_name' type="text" required></input>
                    </div>
                    <div className="pass-log">
                        <label>Password: </label>
                        <input name='password' type="password" required></input>
                    </div>
                    <button className="login-btn" type="submit">Log in</button>
                </form>
            </fieldset>
        </section>
        )
    }
    
}