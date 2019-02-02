//External Dependences
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

//Our middlewares
import logger from './logger'

export default applyMiddleware(
  thunk,
  logger
)