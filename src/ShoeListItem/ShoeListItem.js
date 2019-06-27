import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ShoeListItem.css'

export default class ShoeListItem extends Component {
    render() {
        const { post } = this.props

        return (
            <Link to={`/post/${post.id}`} className="PostListItem">
                <div className='PostListItem_details'>
                    <div className='PostListItem_text'>
                        <h2 className='PostListItem_heading'>[{post.brand}] {post.title}</h2>
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