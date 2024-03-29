import React from 'react';
import { Button, Input } from '../utils/utils'
import './RegisterForm.css'
import AuthApiService from '../services/auth-api-service';

export default class RegisterForm extends React.Component {
    static defaultProps = {
        onRegistrationSuccess: () => {}
    }

    state = { error: null }
    
    //Post new accounts to usersRoute
    handleSubmit = e => {
        e.preventDefault()
        const { user_name, password } = e.target

        this.setState({ error: null })
        AuthApiService.postUser({
            user_name: user_name.value,
            password: password.value,
        })
            .then(user => {
                user_name.value = ''
                password.value = ''
                this.props.onRegistrationSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })  
    }

    render() {
        const { error } = this.state
        return (
            <section className="register-form">
                <h2 className="GetStarted">Get Started</h2>
                <fieldset>
                    <form
                        className="register-section"
                        onSubmit={this.handleSubmit}
                    >
                        <div role="alert">
                            {error && <p className="error-msg">{error}</p>}
                        </div>
                        
                        <div className="user-reg">
                        <label htmlFor='register-username'>Username: </label>
                            <br /><Input 
                                name='user_name'
                                type="text" 
                                required
                                id='register-username'>
                            </Input>
                        </div>
                        <div className="pass-reg">
                            <label htmlFor='register-password'>Password: </label>
                               <br /><Input 
                                    name='password'
                                    type="password" 
                                    required
                                    id='register-password'>
                                </Input>
                            </div>
                            <Button className="register-submit"type="submit">Register</Button>
                    </form>
                </fieldset>
            </section>
        )
    }
}