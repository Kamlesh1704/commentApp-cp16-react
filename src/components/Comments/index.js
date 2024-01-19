import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
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

class Comments extends Component {
  state = {
    id: uuidv4(),
    commentList: [],
    name: '',
    para: '',
    count: 0,
    isLiked: false,
  }

  toggleLikedImage = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteImage = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.filter(eachComment => {
        if (eachComment.id !== id) {
          return eachComment
        }
        return null
      }),
    }))
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  onchangingName = event => {
    this.setState(prevState => ({name: event.target.value}))
  }

  onchangingPara = event => {
    this.setState(prevState => ({para: event.target.value}))
  }

  onsubmiting = event => {
    event.preventDefault()
    const {name, para, isLiked} = this.state

    const newComment = {
      id: uuidv4(),
      name,
      para,
      isLiked: false,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
    }))
    this.setState(prevState => ({
      count: prevState.count + 1,
      name: '',
      para: '',
    }))
  }

  render() {
    const {id, commentList, count, name, para} = this.state

    return (
      <div className="bg">
        <div className="commentandimage">
          <div className="usercomment">
            <h1 className="heading">Comments</h1>
            <p className="para">Say something about 4.0 Technologies</p>
            <form onSubmit={this.onsubmiting} className="form" id="form">
              <input
                type="text"
                onChange={this.onchangingName}
                className="input"
                placeholder="Your Name"
                value={name}
              />
              <textarea
                rows="7"
                cols="14"
                type="text"
                value={para}
                placeholder="Your Comment"
                onChange={this.onchangingPara}
                className="textarea"
              />

              <button type="submit" className="button">
                Add comment
              </button>
            </form>
          </div>

          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="img"
            />
          </div>
        </div>

        <hr />

        <div className="countcomments">
          <p className="count">{count}</p>
          <p className="comments">Comments</p>
        </div>

        <ul className="ul">
          {commentList.map(eachComment => (
            <CommentItem
              commentDetails={eachComment}
              time={new Date()}
              key={eachComment.id}
              toggleLikedImage={this.toggleLikedImage}
              deleteImage={this.deleteImage}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
