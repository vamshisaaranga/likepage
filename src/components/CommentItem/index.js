/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentsItem = props => {
  const {commentsList, commentId, clickDelete, clickLike} = props
  const {name, time, comment, isLiked, backGroundColor} = commentsList
  const formattedDate = formatDistanceToNow(time)
  const firstLetter = name[0].toUpperCase()

  const likeClassName = isLiked ? 'likeColor' : ''
  const likedImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const deleteClicked = () => {
    clickDelete(commentId)
  }

  const clickLikeButton = () => {
    clickLike(commentId)
  }
  return (
    <li className="list">
      <div className="nameAlignment">
        <div>
          <div className={`${backGroundColor} letter`}>
            <p>{firstLetter}</p>
          </div>
        </div>

        <p className="profileName">{name}</p>
        <p className="time">{formattedDate} ago</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="likeAndDelete">
        <div className="like">
          <button className="deleteButton" onClick={clickLikeButton}>
            <img src={likedImageUrl} alt="like" className="likeImage" />
          </button>
          <div className="likeContainer">
            <p className={`likeMessage ${likeClassName}`}>Like</p>
          </div>
        </div>
        <button className="deleteButton" onClick={deleteClicked}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            data-testid="delete"
            className="deleteImage"
          />
        </button>
      </div>
      <hr className="horizontalLine" />
    </li>
  )
}

export default CommentsItem
