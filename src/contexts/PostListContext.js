import React, { Component } from 'react'

export const nullPost = {
  author: {},
  tags: [],
}

const PostListContext = React.createContext({
  postList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setPostList: () => {},
  post: nullPost,
  comments: [],
  setPost: () => {},
  clearPost: () => {},
  setComments: () => {},
  addComment: () => {},
  deletePost: () => {},
})
export default PostListContext

export class PostListProvider extends Component {
  state = {
    post: nullPost,
    postList: [],
    error: null,
  };

  setPostList = postList => {
    this.setState({ postList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setPost = post => {
    this.setState({ post })
  }

  setComments = comments => {
    this.setState({ comments })
  }

  clearPost = () => {
    this.setPost(nullPost)
    this.setComments([])
  }

  handleDeletePost = postId => {
    this.setState({
      posts: this.state.posts.filter(post => post.id !== postId)
    })
  }

  addComment = comment => {
    this.setComments([
      ...this.state.comments,
      comment
    ])
  }

  render() {
    const value = {
      postList: this.state.postList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setPostList: this.setPostList,
      post: this.state.post,
      comments: this.state.comments,
      setPost: this.setPost,
      setComments: this.setComments,
      clearPost: this.clearPost,
      addComment: this.addComment,
      deletePost: this.handleDeletePost,
    }
    return (
      <PostListContext.Provider value={value}>
        {this.props.children}
      </PostListContext.Provider>
    )
  }
}
