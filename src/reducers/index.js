//External dependences
import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'

//Our reducers
import authedUser from './authedUser'
import users from './users'
import tweets from './tweets'

export default combineReducers({
  authedUser,
  users,
  tweets,
  loadingBar: loadingBarReducer,
})