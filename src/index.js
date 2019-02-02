//External dependences
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

//Our dependences
import App from './components/App'
import reducer from './reducers'
import middleware from './middleware'

//style
import './index.css'

//Creating the Redux Store
const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)