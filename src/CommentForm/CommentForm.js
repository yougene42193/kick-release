import React, { Component } from 'react';
import PostContext from '../contexts/PostContext';
import ApiService from '../services/post-api-service';
import { Button, Textarea } from '../utils/utils';
import './CommentForm.css';

export default class CommentForm extends Component {
    static contextType = PostContext

    handleSubmit = e => {
        e.preventDefault()
        const { post } = this.context
        const { text } = e.target

        ApiService.postComment(post.id, text.value)
            .then(this.context.addComment)
            .then(() => {
                text.value = ''
            })
            .catch()
    }

    handleReload = e => {
        window.location.reload()
    }

    render() {
        return (
            <form
                className='CommentForm'
                onSubmit={this.handleSubmit}
            >
                <div className='Comment-text'>
                    <Textarea
                        required
                        aria-label='Make a comment'
                        name='text'
                        id='text'
                        cols='30'
                        rows='3'
                        placeholder='Make a comment'>
                    </Textarea>
                </div>
                <Button type='submit' className="PostBtn" onClick={this.handleReload}>
                    Post Comment
                </Button>
            </form>
        )
    }
}