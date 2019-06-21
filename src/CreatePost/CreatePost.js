import React from 'react';
import { Link } from 'react-router-dom';
import './CreatePost.css'

export default class CreatePost extends React.Component {
    render() {
        return (
            <section className="new-post">
                <h2>Post a new release</h2>
                <fieldset>
                    <form>
                        <div className="brand-label">
                            <label>Brand: </label>
                            <input></input>
                        </div>
                        <div className="shoe-label">
                            <label>Shoe Name: </label>
                            <input type="text"></input>
                        </div>
                        <div className="release-label">
                            <label>Release Date: </label>
                            <input type="date"></input>
                        </div>
                        <div className="desc-label">
                            <label>Description: </label>
                            <input type="text" placeholder="Add any links"></input>
                        </div>
                        <button><Link to='/list'>Create</Link></button>
                    </form>
                </fieldset>
            </section>
        )
    }
}