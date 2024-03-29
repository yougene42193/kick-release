import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'
import  yeezy1 from '../images/yeezy-blue-custom.png';

export default class LandingPage extends React.Component {
    render() {
        return (
            <section className="landing-page">
                <div className="release-text">
                    <h1>Kick Release</h1>
                    <p>Kick Release is a website that helps people find the hottest new kicks that are about to be released.</p>
                </div>
                <div className="what-todo">
                    <h2>What Can I Do?</h2>
                    <img className='landing-image' src={yeezy1} alt='yeezy-blue-custom'/>
                    <p>You can post the upcoming shoes along with the date of release, the brand and name of the new shoes. With that other people can see the upcoming shoe releases easily and commented on your post!</p>
                </div>
                <div className="get-started">
                    <h2>Get Started</h2>
                    <p>If you want to see the upcoming shoes or have new information on new shoes join now to gain access.</p>
                    <button className="start-button"><Link to='/register'>Register Today!</Link></button>
                </div>
            </section>
        )
    }
}