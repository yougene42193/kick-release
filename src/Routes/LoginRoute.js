import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';

export default class LoginRoute extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {},
        }
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).form || '/list'
        history.push(destination)
        window.location.reload();
    }

    render() {
        return(
            <section className='LoginPage'>
                <LoginForm
                    onLoginSuccess={this.handleLoginSuccess}
                />
            </section>
        )
    }
}