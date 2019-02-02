//External dependences
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

//Our dependences
import App from './components/App'
import reducer from './reducers'

//style
import './index.css'

//Creating the Redux Store
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)