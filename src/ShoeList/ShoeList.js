import React from 'react';
import { Section } from '../utils/utils'
import Categories from '../Categories/Categories'
import './ShoeList.css'
import ShoeListItem from '../ShoeListItem/ShoeListItem'
import PostListContext from '../contexts/PostListContext';
import ApiService from '../services/post-api-service';

export default class ShoeList extends React.Component {
    static contextType = PostListContext

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
            />    
        )
    }

    render() {
        const { error } = this.context
        return (
            <Section list className='PostListPage'>
                <Categories />
                {error
                    ? <p className='red'>There was an error, try again</p>
                    : this.renderPosts()}
            </Section>
        )
    }
}