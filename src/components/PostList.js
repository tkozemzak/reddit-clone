import React, { Component } from 'react'
import {connect} from 'react-redux'
import Post from './Post'


class PostList extends Component {

  render(){
    let listOfPosts = this.props.posts.map(post => <Post key={post.id} post={post}/>)
    return (
      <ul>{listOfPosts}</ul>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps)(PostList)
