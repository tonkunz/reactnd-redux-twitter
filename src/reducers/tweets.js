import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from '../actions/tweets'

export default function tweets (state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS :
      return {
        ...state,
        ...action.tweets
      }
    case ADD_TWEET :
      //Adding a tweet to parent reply array
      let replyingTo = {}
      if (action.tweet.replyingTo !== null) {
        replyingTo = {
          [action.tweet.replyingTo]: {
            ...state[action.tweet.replyingTo],
            replies: state[action.tweet.replyingTo].replies.concat([action.tweet.id])
          }
        }
      }

      return {
        ...state,
        [action.tweet.id] : action.tweet,
        ...replyingTo,
      }
    case TOGGLE_TWEET :
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes : action.hasLiked === true
            ? state[action.id].likes.filter(uid => uid !== action.authedUser)
            : state[action.id].likes.concat(action.authedUser)
        }
      }
    default :
      return state
  }
}