import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import posts from './reducers/postsReducer'
import comments from './reducers/commentsReducer'
import thunk from 'redux-thunk'

const middleware = [logger, thunk]

const rootReducer = combineReducers({ posts, comments })

export default () => createStore(
  rootReducer,
  applyMiddleware(...middleware)
)
