//External dependences
import React, { Component } from 'react'
import { connect } from 'react-redux'

//Our dependences
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        {this.props.loading
        ? <div className='center'>Loading...</div>
        : <Dashboard />}
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)