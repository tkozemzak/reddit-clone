import React, { Component } from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'

class AddPostForm extends Component {
  state = {
    title: '',
    body: '',
    author: '',
    img_url: ''
  }
  handleSubmit = () => {
  }
  render() {
    return (
      <Row>
        <Col sm="10">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="title-field">Title</Label>
              <Input
                type="text"
                name="title"
                id="title-field"
                onChange={e => this.setState({ title: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="body-field">Body</Label>
              <Input
                type="text"
                name="body"
                id="body-field"
                onChange={e => this.setState({ body: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="author-field">Author</Label>
              <Input
                type="text"
                name="author"
                id="author-field"
                onChange={e => this.setState({ author: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="image-field">Image URL</Label>
              <Input
                type="text"
                name="img_url"
                id="img_url-field"
                onChange={e => this.setState({ img_url: e.target.value })}
              />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    )
  }
}

export default AddPostForm
