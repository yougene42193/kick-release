import React, { Component } from 'react'
import PostContext from '../contexts/PostContext'
import ApiService from '../services/post-api-service'
import { Section } from '../utils/utils'
import { Link } from 'react-router-dom'
import CommentForm from '../CommentForm/CommentForm'
import './PostPage.css'

export default class PostPage extends Component {
    static defaultProps = {
        match: { 
            params: {} 
        },
    }

    static contextType = PostContext

    //Get comments from commentsRouter for posts
    componentDidMount() {
        const { postId } = this.props.match.params
        this.context.clearError()
        ApiService.getPost(postId)
            .then(this.context.setPost)
            .catch(this.context.setError)
        ApiService.getPostComments(postId)
            .then(this.context.setComments)
            .catch(this.context.setError)
    }

    componentWillUnmount(){
        this.context.clearPost()
    }

    //delete post
    handleClickDelete = e => {
        e.preventDefault()
        const { postId } = this.props.match.params
        ApiService.deletePost(postId)
        .then(() => {
            window.location.reload();
          })
          .catch(error => {
            console.error({ error })
          })
          
    }

    renderPost() {
        const { post } = this.context
        return <>
            <div className='PostPage'>
                <button
                    className='BackBtn'
                    type='button'
                >
                    <Link to={`/list`}>
                        Back
                    </Link>
                </button>
                <h2>[{post.brand}] {post.title}</h2>
                <PostContent post={post} />          
            </div>
        </>
    }

    render() {
        const { error, post, comments } = this.context
        let content
        if (error) {
            content = (error.error === `Post doesn't exist`)
            ? <p className='error-msg'>Post not found</p>
            : <p className='error-msg'>There was an error</p>
        } else if (!post.id) {
            content = <div className='loading' />
        } else {
            content = this.renderPost()
        }
        return (
            <Section className='PostPage'>
                
                {content} 
                <button
                    className="Post_delete"
                    type='button'
                    onClick={this.handleClickDelete}
                >
                    <Link to={`/list`} refresh='true'>
                        Delete
                    </Link>
                </button>
                  
                <CommentForm />
                <PostComments comments={comments} />          
            </Section>
        )
    }
}

function PostContent({ post }) {
    return (
        <p className='PostPage_content'>
            {post.content}
        </p>
    )
}

function PostComments({ comments = [] }) {
    return (
        <ul className='PostPage_comment-list'>
            <h3 className="comments-header">Comments</h3>
            {comments.map(comment =>
                <li key={comment.id} className="PostPage_comment">
                    <p className='Postpage_comment-user'>
                        {comment.user.user_name}
                    </p>
                    <p className='PostPage_comment-text'>
                        {comment.text}
                    </p>
                </li>
            )}
        </ul>
    )
}