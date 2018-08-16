import axios from 'axios'

export const FETCH_POSTS = "FETCH_POSTS"
export const ADD_POST = "ADD_POST"

export const fetchPosts = (posts) => {
  return {
    type: FETCH_POSTS,
    payload: posts
  }
}

export const addPost = (newPost) => {
  return dispatch => {
    axios.post(`http://localhost:8082/api/posts`, newPost)
      .then(response =>
        dispatch({
          type: ADD_POST,
          payload: response.data
        }))
  }
}
