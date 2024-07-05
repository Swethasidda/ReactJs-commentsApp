import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
// Write your code here
class Comments extends Component {
  state = {commentsList: [], name: '', description: '', commentsCount: 0}

  deleteUser = id => {
    const {commentsList} = this.state
    const filtered = commentsList.filter(each => each.id !== id)
    this.setState({commentsList: filtered})
    this.setState(prevState => ({commentsCount: prevState.commentsCount - 1}))
  }

  onTexting = event => {
    this.setState({name: event.target.value})
  }

  ondescription = event => {
    this.setState({description: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, description} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      name,
      description,
      date: new Date(),
      isLikeed: false,
      intialbackgroundColor: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      description: '',
    }))
    this.setState(prevState => ({commentsCount: prevState.commentsCount + 1}))
  }

  toggleLikedIcon = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLikeed: !each.isLikeed}
        }
        return each
      }),
    }))
  }

  render() {
    const {name, description, commentsList, commentsCount} = this.state
    const {isLikeed} = commentsList
    console.log(isLikeed)
    return (
      <div className="big-container">
        <div className="small-container">
          <div className="comments-container">
            <h1 className="heading">Comments</h1>
            <p className="input-label">Say Something about 4.0 Technologies</p>
            <form className="form" onSubmit={this.onAddComment}>
              <input
                type="text"
                id="input"
                className="input"
                placeholder="Your Name"
                onChange={this.onTexting}
                value={name}
              />
              <textarea
                rows="12"
                cols="50"
                className="text-area"
                placeholder="Your Comment"
                onChange={this.ondescription}
                value={description}
              >
                {}
              </textarea>
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comments-image"
          />
        </div>
        <div className="commentsCount-container">
          <p className="para1">{commentsCount}</p>
          <p className="para2">Comments</p>
        </div>
        <ul className="comments-container1">
          {commentsList.map(each => (
            <CommentItem
              commentsList={each}
              key={each.id}
              deleteUser={this.deleteUser}
              toggleLikedIcon={this.toggleLikedIcon}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
