import './Overlay.css'

const Overlay = ({ likes, username }) => {
  return (
    <div className="overlay">
      <span>
        Likes: {likes} <br></br>
        Username: {username}
      </span>
    </div>
  )
}

export default Overlay
