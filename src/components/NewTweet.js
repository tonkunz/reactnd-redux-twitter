//External dependences
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

//Our dependences
import { handleAddTweet } from '../actions/tweets'

class NewTweet extends Component {
  state = {
    text: '',
    toHome: false,
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { dispatch, id } = this.props

    dispatch(handleAddTweet(this.state.text, id))

    this.setState({
      text: '',
      toHome: id ? false : true
    })
  }

  render() {
    if (this.state.toHome) {
      return <Redirect to='/'/>
    }

    const tweetLeft = 280 - this.state.text.length

    return (
      <div>
        <h3 className='center'>Compose New Tweet</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <textarea
            className='textarea'
            placeholder="What's Happening?"
            value={this.state.text}
            onChange={this.handleChange}
            maxLength={280}
          />
          { tweetLeft <= 100 && (
            <div className='tweet-length'>
              {tweetLeft}
            </div>
          )}
          <button
            className='btn'
            type='submit'
            disabled={this.state.text === ''}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewTweet)