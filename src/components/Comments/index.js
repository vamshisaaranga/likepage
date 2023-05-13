/* eslint-disable react/no-unused-state */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import CommentsItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const commentsListObjects = []

class Comments extends Component {
  state = {
    commentsCount: 0,
    commentsList: [],
    name: '',
    comment: '',
    isLiked: false,
    backGroundColor: '',
  }

  commentedName = event => {
    this.setState({name: event.target.value})
  }

  commentText = event => {
    this.setState({comment: event.target.value})
  }

  clickDelete = id => {
    const {commentsList} = this.state
    const filteredList = commentsList.filter(each => each.id !== id)
    this.setState(prevState => ({
      commentsCount: prevState.commentsCount - 1,
      commentsList: filteredList,
    }))
  }

  addComment = event => {
    const index = Math.ceil(
      Math.random() * initialContainerBackgroundClassNames.length - 1,
    )
    event.preventDefault()
    const date = new Date()
    const {name, comment} = this.state
    if (name !== '' && comment !== '') {
      const newComment = {
        id: uuidv4(),
        name,
        comment,
        time: date,
        isLiked: false,
        backGroundColor: initialContainerBackgroundClassNames[index],
      }

      this.setState(prevState => ({
        commentsCount: prevState.commentsCount + 1,
        commentsList: [...prevState.commentsList, newComment],
        name: '',
        comment: '',
      }))
    }
  }

  clickLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return {each}
      }),
    }))
  }

  render() {
    const {commentsCount, commentsList, name, comment} = this.state

    return (
      <div>
        <div className="alignment">
          <div>
            <h1 className="heading">Comments</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
              alt="comments"
              className="smallImage"
            />
            <form onClick={this.addComment}>
              <p className="para1">Say something about 4.0 Technologies</p>
              <input
                type="text"
                placeholder="Your Name"
                className="inputElement"
                onChange={this.commentedName}
                value={name}
              />
              <br />
              <textarea
                rows="8"
                cols="40"
                placeholder="Your Comment"
                className="inputTextArea"
                onChange={this.commentText}
                value={comment}
              />
              <br />
              <button className="button" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <div className="largeImageAdjust">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
              alt="comments"
              className="largeImage"
            />
          </div>
        </div>
        <hr className="horizontalLine" />
        <div className="noOfCommentsContainer">
          <p className="noOfComments">{commentsCount}</p>
          <p className="comments">Comments</p>
        </div>
        <ul>
          {commentsList.map(each => (
            <CommentsItem
              commentsList={each}
              clickDelete={this.clickDelete}
              commentId={each.id}
              clickLike={this.clickLike}
              key={each.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
