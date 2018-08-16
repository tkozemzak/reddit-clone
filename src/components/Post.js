import React, { Component } from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'
import FaArrowUp from 'react-icons/lib/fa/arrow-up'
import FaArrowDown from 'react-icons/lib/fa/arrow-down'
import FaComment from 'react-icons/lib/fa/comment'
import CommentList from './CommentList'


class Post extends Component {


  render() {
    console.log(this.props);
  return (
    <Row className="mt-3">
      <Col>
        <Card>
          <CardImg
            top
            width="100%"
            src={this.props.post.img_url}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Title: {this.props.post.title} | <FaArrowUp /> 1 <FaArrowDown /></CardTitle>
            <CardSubtitle>Author: {this.props.post.author}</CardSubtitle>
            <CardText>
              Body: {this.props.post.content}
            </CardText>
              <hr />
              a few seconds ago | <FaComment /> 2 Comments
              <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Input type="text" name="comment" id="comment-field" placeholder="Enter a comment here" onChange={e => this.setState({content: e.target.value, post_id: this.props.post.id})}/>
                </FormGroup>
                <Button>Submit</Button>
              </Form>
              <ul className="mt-2">
                <li><CommentList/></li>
              </ul>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}
}

export default Post
