import React, { Component } from 'react'
import { connect } from 'react-redux'
import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'
import { formatDate, formatTweet } from '../utils/helpers'
import { Link } from 'react-router-dom'

class Tweet extends Component {
  render() {
    const {
      name, avatar, timestamp, author, text, hasLiked, likes, replies, id
    } = this.props.tweet

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
            <span>{author}</span>
            <div>{formatDate(timestamp)}</div>
            <p>{text}</p>
          </div>
          <div className='tweet-icons'>
            <TiArrowBackOutline className='tweet-icon' />
            <span>{replies !== 0 && replies}</span>
            {hasLiked === true
              ? <TiHeartFullOutline color='#e0245e' className='tweet-icon' />
              : <TiHeartOutline className='tweet-icon' />}
            <span>{likes !== 0 && likes}</span>
          </div>
        </div>
      </Link>
    )
  }
}

function mapStateToProps ({ authedUser, users, tweets }, { id }) {
  const tweet = tweets[id]

  return {
    tweet: formatTweet(tweet, users[tweet.author], authedUser)
  }
}

export default connect(mapStateToProps)(Tweet)