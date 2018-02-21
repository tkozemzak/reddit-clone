import React from 'react'
import { Row, Col } from 'reactstrap'

const AddPostForm = props => {
  return (
    <Row>
      <Col sm="10">
        <form>
          <div>
            <label htmlFor="title">Title</label>
            <input id="title" className="form-control" />
          </div>
          <div>
            <label htmlFor="body">Body</label>
            <textarea id="body" className="form-control" />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <input id="author" className="form-control" />
          </div>
          <div>
            <label htmlFor="image-url">Image URL</label>
            <input id="image-url" className="form-control" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Create Post
            </button>
          </div>
        </form>
      </Col>
    </Row>
  )
}

export default AddPostForm
