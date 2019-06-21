import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../Categories/Categories'
import './ShoeList.css'

export default class ShoeList extends React.Component {
    render() {
        return (
            <section className="shoe-list">
                <div className="head-title">
                    <h2>Kick Release</h2>
                </div>
                <Categories />
                <div className="new-post-btn">
                    <button><Link to='/create'>New Post +</Link></button>
                </div>
                <div className="posts-list">
                    <div className="single-post">
                        <h3>[Brand] Name of Shoe</h3>
                        <p>Release Date: xx/xx/xxxx</p>
                        <p>Description of the shoes!</p>
                        <button>edit</button>
                        <button>delete</button>
                    </div>
                    <div className="single-post">
                        <h3>[Brand] Name of Shoe</h3>
                        <p>Release Date: xx/xx/xxxx</p>
                        <p>Description of the shoes!</p>
                        <button>edit</button>
                        <button>delete</button>
                    </div>
                    <div className="single-post">
                        <h3>[Brand] Name of Shoe</h3>
                        <p>Release Date: xx/xx/xxxx</p>
                        <p>Description of the shoes!</p>
                        <button>edit</button>
                        <button>delete</button>
                    </div>
                    <div className="single-post">
                        <h3>[Brand] Name of Shoe</h3>
                        <p>Release Date: xx/xx/xxxx</p>
                        <p>Description of the shoes!</p>
                        <button>edit</button>
                        <button>delete</button>
                    </div>
                    <div className="single-post">
                        <h3>[Brand] Name of Shoe</h3>
                        <p>Release Date: xx/xx/xxxx</p>
                        <p>Description of the shoes!</p>
                        <button>edit</button>
                        <button>delete</button>
                    </div>
                    <div className="single-post">
                        <h3>[Brand] Name of Shoe</h3>
                        <p>Release Date: xx/xx/xxxx</p>
                        <p>Description of the shoes!</p>
                        <button>edit</button>
                        <button>delete</button>
                    </div>
                </div>
            </section>
        )
    }
}