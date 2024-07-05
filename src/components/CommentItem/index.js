// Write your code here
import {Component} from 'react'
import './index.css'
import {formatDistanceToNow} from 'date-fns'

class CommentItem extends Component {
  render() {
    const {commentsList, deleteUser, toggleLikedIcon} = this.props
    const {
      name,
      description,
      isLikeed,
      id,
      intialbackgroundColor,
    } = commentsList

    const onDelete = () => {
      deleteUser(id)
    }

    const onLikedIcon = () => {
      toggleLikedIcon(id)
    }

    const liked = isLikeed ? (
      <img
        src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
        alt="like"
        className="image"
      />
    ) : (
      <img
        src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
        alt="like"
        className="image"
      />
    )

    return (
      <li className="list-container">
        <div className="list-container1">
          <p className={intialbackgroundColor}>{name[0]}</p>
          <h1 className="user-name">{name}</h1>
          <p className="para">{formatDistanceToNow(new Date())}</p>
        </div>
        <p className="description">{description}</p>
        <div className="like-delete-container">
          <div className="like-container">
            <button type="button" className="button1" onClick={onLikedIcon}>
              {liked}
            </button>
            <p className="like-para">Like</p>
          </div>
          <button
            type="button"
            className="delete-button"
            onClick={onDelete}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="delete-image"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default CommentItem
