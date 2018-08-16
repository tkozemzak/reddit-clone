import axios from 'axios'

export const FETCH_COMMENTS = "FETCH_COMMENTS"
export const ADD_COMMENT = "ADD_COMMENT"

export const fetchComments = (comments) => {
  return {
    type: FETCH_COMMENTS,
    payload: comments
  }
}

export const addComment = (newComment) => {
  return dispatch => {
    axios.post(`http://localhost:8082/api/comments`, newComment)
      .then(response =>
        dispatch({
          type: ADD_COMMENT,
          payload: response.data
        }))
  }
}
