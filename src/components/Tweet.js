//External dependences
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

//Our dependences
import { formatTweet, formatDate } from '../utils/helpers'
import { TiArrowBackOutline, TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti/index'
import { handleToggleTweet } from '../actions/tweets'


class Tweet extends Component {
  handleLike = (event) => {
    event.preventDefault

    const { dispatch, tweet, authedUser } = this.props

    dispatch(handleToggleTweet({
      id: tweet.id,
      authedUser,
      hasLiked : tweet.hasLiked
    }))
  }

  toParent = (event, id) => {
    event.preventDefault
    this.props.history.push(`/tweet/${id}`)
  }

  render () {
    const { tweet } = this.props

    if ( tweet === null ) {
      return <p>This Tweet doesn't exists!</p>
    }

    //Destructuring atrib from tweet
    const { name, timestamp, text, avatar, likes, replies, hasLiked, parent, id } = tweet

    return (
      <Link to={`/tweet/${id}`} className='tweet'>
        <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className='avatar'
        />
        <div className='tweet-info'>
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
            {parent && (
              <button className='replying-to' onClick={event => this.toParent(event, parent.id)}>
                Replying to @{parent.author} 
              </button>
            )}
            <p>{text}</p>
          </div>
          <div className='tweet-icons'>
              <TiArrowBackOutline className='tweet-icon'/>
              <span>{replies !== 0 && replies}</span>
              <button className='heart-button' onClick={this.handleLike}>
              {hasLiked
                ? <TiHeartFullOutline className='tweet-icon' color='#e0245e'/>
                : <TiHeartOutline className='tweet-icon'/>}
              </button>
              <span>{likes !== 0 && likes}</span>
          </div>
        </div>
      </Link>
    )
  }
}

//The second argument is the tweetId received of Dashboard Component
function mapStateToProps ({ tweets, users, authedUser }, { id }) {
  const tweet = tweets[id]
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null

  return {
    authedUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null
  }
}

export default withRouter(connect(mapStateToProps)(Tweet))