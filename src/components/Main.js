import React, { Component } from 'react'
import AddPostForm from './AddPostForm'
import PostList from './PostList'
import FilterPosts from './FilterPosts'
import CommentList from './CommentList'
import { Container, Row, Col, Button } from 'reactstrap'

class Main extends Component {
  render() {
    //let listOfPosts = this.props.posts.map(post => <Post key={post.id} post={post}/>)
    //let listOfComments = this.props.comments.map(comment => <Comment key={comment.id} comment={comment} />)
    return (
      <Container className="mt-4">
        <Row>
          <Col sm={{size: 8, offset: 1}}>
            <FilterPosts />
          </Col>
          <Col sm="2">
            <Button color="secondary">Add Post</Button>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col sm={{size: 11, offset: 1}}>
            <AddPostForm />
          </Col>
        </Row>
        <Row>
          <Col className="pr-0" sm={{size: 9, offset: 1}}>
            {/* Below is the Post component for each post. It is up to you how you would like to iterate over them. */}
            <PostList/>
            <CommentList/>
          </Col>
        </Row>
      </Container>
    )
  }
}


export default Main
