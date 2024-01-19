// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleLikedImage, deleteImage, time} = props
  const {id, name, para, isLiked} = commentDetails
  const postedTime = formatDistanceToNow(time)
  const onclickinglikeIcon = () => {
    toggleLikedImage(id)
  }

  const onclickingdeletebutton = () => {
    deleteImage(id)
  }
  const isLikedcomment = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const isLikedlike = isLiked ? 'bluecolor' : ''

  return (
    <li className="li">
      <div className="nametime">
        <p className="dp">{name.slice(0, 1)}</p>
        <p className="name">{name}</p>
        <p className="time">{postedTime}</p>
      </div>
      <p className="para">{para}</p>
      <div className="footer">
        <div className="footer1">
          <button onClick={onclickinglikeIcon}>
            <lable htmlFor="img">
              <img
                id="img"
                src={isLikedcomment}
                alt="like"
                className="thumbicon"
              />{' '}
            </lable>
          </button>
          <p id="img" className={`like ${isLikedlike}`}>
            Like
          </p>
        </div>
        <button onClick={onclickingdeletebutton} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="deleteicon"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
