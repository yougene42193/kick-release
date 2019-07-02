import React from 'react';
import { Section } from '../utils/utils'
import Categories from '../Categories/Categories'
import './ShoeList.css'
import ShoeListItem from '../ShoeListItem/ShoeListItem'
import PostListContext from '../contexts/PostListContext';
import ApiService from '../services/post-api-service';

export default class ShoeList extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = PostListContext

    handleDeletePost = postId => {
        this.props.history.push(`/list`)
    }

    componentDidMount() {
        this.context.clearError()
        ApiService.getPosts()
            .then(this.context.setPostList)
            .catch(this.context.setError)
    }

    renderPosts() {
        const { postList = [] } = this.context
        
        return postList.map(post =>
            <ShoeListItem 
                key={post.id}
                post={post}
                onDeletePost={this.handleDeletePost}
            />    
        )
    }

    render() {
        const { error } = this.context
        return (
            <Section list className='PostListPage'>
                <h2>Posts</h2>
                {error
                    ? <p className='red'>There was an error, try again</p>
                    : this.renderPosts()}
            </Section>
        )
    }
}