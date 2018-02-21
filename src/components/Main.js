import React, { Component } from 'react'
import AddPostForm from './AddPostForm'
import Post from './Post'
import FilterPosts from './FilterPosts'
import { Container, Row, Col, Button } from 'reactstrap'

class Main extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="10">
            <FilterPosts />
          </Col>
          <Col sm="2">
            <Button className="float-right" color="secondary">Add Post</Button>
          </Col>
        </Row>

        <AddPostForm />
        {/* Below is the Post component for each post. It is up to you how you would like to iterate over them. */}
        <Post />
      </Container>
    )
  }
}

export default Main
