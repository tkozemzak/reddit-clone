import React from 'react'

const Post = props => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="well">
          <div className="media-left">
            <img className="media-object" alt="explanation" />
          </div>
          <div className="media-body">
            <h4 className="media-heading">
              Some Text |
              <a>
                <i className="glyphicon glyphicon-arrow-up" />
              </a>
              <a>
                <i className="glyphicon glyphicon-arrow-down" />
              </a>
              10
            </h4>
            <div className="text-right">Some Author</div>
            <p>Some text</p>
            <div>
              Some time ago |
              <i className="glyphicon glyphicon-comment" />
              <a>Some comments</a>
            </div>
            <div className="row">
              <div className="col-md-offset-1">
                <hr />
                <p>Comment text</p>
                <form className="form-inline">
                  <div className="form-group">
                    <input className="form-control" />
                  </div>
                  <div className="form-group">
                    <input type="submit" className="btn btn-primary" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
