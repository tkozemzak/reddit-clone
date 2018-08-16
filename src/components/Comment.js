import React, {Component} from 'react'
import { addComment } from '../redux/actions/commentsActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Comment extends Component {
  state = {
    content: '',
    post_id: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addComment(this.state)
  }
  render() {
    return (
      <li>{this.props.comment.content}</li>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addComment
}, dispatch)

export default connect(null, mapDispatchToProps)(Comment)
