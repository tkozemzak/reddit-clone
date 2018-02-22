import React from 'react'
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

const Post = props => {
  return (
    <Row>
      <Col>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Post Title | <FaArrowUp /> 1 <FaArrowDown /></CardTitle>
            <CardSubtitle>Post Author</CardSubtitle>
            <CardText>
              <p>Post Body</p>
              <hr />
              <p>Comments</p>
              <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  
                  <Input type="text" name="comment" id="comment-field" placeholder="Enter a comment here" />
                </FormGroup>
                <Button>Submit</Button>
              </Form>
              <ul>
                <li>Comment One</li>
                <li>Comment Two</li>
              </ul>
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default Post
