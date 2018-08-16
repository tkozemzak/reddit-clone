import { ADD_COMMENT, FETCH_COMMENTS } from '../actions/commentsActions'
let initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_COMMENTS:
      return [...action.payload]
    case ADD_COMMENT:
      return [...state, action.payload]
    default:
      return state
  }
}
