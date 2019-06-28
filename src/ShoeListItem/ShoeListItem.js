import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ShoeListItem.css'
import ApiService from '../services/post-api-service';
import PostContext from '../contexts/PostContext';

export default class ShoeListItem extends Component {
    static defaultProps = {
        onDeletePost: () => {},
    }
    static contextType = PostContext

    handleClickDelete = e => {
        e.preventDefault()
        const postId = this.props.id

        ApiService.deletePost()
        .then(() => {
            this.context.deletePost(postId)
            this.props.onDeletePost(postId)
          })
          .catch(error => {
            console.error({ error })
          })
    }
    render() {
        const { post } = this.props
        return (
            <Link to={`/post/${post.id}`} className="PostListItem">
                <div className='PostListItem_details'>
                    <div className='PostListItem_text'>
                        <h2 className='PostListItem_heading'>[{post.brand}] {post.title}</h2>
                        <h3 className='PostReleaseDate'>{post.release_date}</h3>
                        <button
                            className="Post_delete"
                            type='button'
                            onClick={this.handleClickDelete}
                        >
                            Delete
                        </button>
                        {/*<p className="PostListItem_desc">{truncate(post.content)}</p>*/}
                    </div>
                </div>
            </Link>
        )
    }
}

function truncate(text) {
    const words = text.split(' ')

    if(words.length > 10) {
        return words.slice(0, 10).join(' ') + ' ...'
    }

    return text
}