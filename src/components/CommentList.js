import React, {Component} from 'react'
import Comment from './Comment'
import {connect} from 'react-redux'

class CommentList extends Component {
  render() {
    let listOfComments = this.props.comments.map(comment => <Comment key={comment.id} comment={comment} />)

    console.log(this.props);
    return (
      <ul>{listOfComments}</ul>
    )
  }
}

const mapStateToProps = state => ({
  comments: state.comments
})

export default connect(mapStateToProps)(CommentList)
