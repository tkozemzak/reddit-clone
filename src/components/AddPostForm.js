import React, {Component} from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { addPost } from '../redux/actions/postsActions'
import { bindActionCreators } from 'redux'

class AddPostForm extends Component {
  state = {
      title: '',
      author: '',
      content: '',
      img_url: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addPost(this.state)
  }

  render() {
    return (
      <Row>
        <Col sm="10">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="title-field">Title</Label>
              <Input type="text" name="title" id="title-field" onChange={e => this.setState({title: e.target.value})} />
            </FormGroup>
            <FormGroup>
              <Label for="body-field">Body</Label>
              <Input type="text" name="body" id="body-field" onChange={e => this.setState({content: e.target.value})} />
            </FormGroup>
            <FormGroup>
              <Label for="author-field">Author</Label>
              <Input type="text" name="author" id="author-field" onChange={e => this.setState({author: e.target.value})} />
            </FormGroup>
            <FormGroup>
              <Label for="image-field">Image URL</Label>
              <Input type="text" name="image" id="image-field" onChange={e => this.setState({img_url: e.target.value})} />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addPost
}, dispatch)

export default connect(null, mapDispatchToProps)(AddPostForm)
