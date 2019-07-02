import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/token-service'
import './Header.css'

export default class Header extends React.Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        window.location.reload();
    }

    renderLogoutLink() {
        return (
            <div className="loggedin-header">
                <nav role="navigation">            
                    <div className='header-logged-in'>
                        
                        <li className="main-link"><Link to='/list'>Kick Release</Link></li>
                        
                        <li className="changable-link"><Link className="nav-header" to='/create'>Create Post</Link></li>
                        <li className="changable-link"><Link
                            className="nav-header"
                            onClick={this.handleLogoutClick}
                            to='/login'>
                                Logout
                        </Link></li>
                    </div>
                </nav>
                <header>
                    
                </header>
            </div>
        )
    }

    renderLoginLink() {
        return (
            <div className="loggedout-header">
                <nav role="navigation">
                    <div className='header-not-logged-in'>
                    <li className="main-link"><Link to='/'>Kick Release</Link></li>
                        <li className="changable-link"><Link
                            className="nav-header"
                            to='/register'>
                            Get Started   
                        </Link></li>
                        <li className="changable-link"><Link
                            className="nav-header"
                            to='/login'>
                                Log in    
                        </Link></li>
                    </div>
                </nav>
                <header>

                </header>
            </div>
        )
    }

    render() {
        return (
            <section className="top-header">
                {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}
            </section>
        )
    }
}