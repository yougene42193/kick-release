import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

export default class Header extends React.Component {
    render() {
        return (
            <section className="header">
                <nav role="navigation">
                    <div className="login-header">
                        <ul className="link-buttons">
                            <li><Link className="nav-header" to='/'>Home</Link></li>
                            <li><Link className="nav-header" to='/register'>Register</Link></li>
                            <li><Link
                            className="nav-header"
                            onClick={this.handleLogoutClick}
                            to='/login'>
                                Log in
                        </Link></li>
                        </ul>
                    </div>
                </nav>
            </section>
        )
    }
}