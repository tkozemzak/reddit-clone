import { ADD_POST, FETCH_POSTS } from '../actions/postsActions'
let initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_POSTS:
      return [...action.payload]
    case ADD_POST:
      return [...state, action.payload]
    default:
      return state
  }
}
