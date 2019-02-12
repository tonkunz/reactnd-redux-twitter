//API dependences
import { saveLikeToggle } from '../utils/api'

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'

export function receiveTweets (tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  }
}

export function toggleTweet ({ id, authedUser, hasLiked}) {
  return {
    type: TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked
  }
}

  export function handleToggleTweet (info) {
    return dispatch => {
      //optimistically update
      dispatch(toggleTweet(info))

      return saveLikeToggle(info)
        .catch(e => {
          console.warn('Error ind handleToogleTweet', e)
          dispatch(toggleTweet(info))
          alert('The was an error liking the tweet. Try again later!')
        })
    }
  }