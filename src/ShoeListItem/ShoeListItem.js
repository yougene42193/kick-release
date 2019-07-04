import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ShoeListItem.css'
import ApiService from '../services/post-api-service';
import PostContext from '../contexts/PostContext';

export default class ShoeListItem extends Component {
    static defaultProps = {
        match: {
            params: {}
        },
        
    }
    static contextType = PostContext

    handleClickDelete = e => {
        e.preventDefault()
        const { postId } = this.props.match.params

        ApiService.deletePost(postId)
        
    }

    

    render() {
        const { post } = this.props
        return (
            
                <div className='PostListItem_details'>
                    <div className='PostListItem_text'>                        
                            <h2 className='PostListItem_heading'>
                                <Link to={`/post/${post.id}`} className="PostListItem">
                                    [{post.brand}] {post.title}
                                </Link>
                            </h2>   
                        <h3 className='PostReleaseDate'>Release Date: {post.release_date}</h3>  
                    </div>
                </div>
            
        )
    }
}
