import './index.css'

const Message = props => {
  const {message} = props
  return (
    <div>
      <h1 className="heading">{message}</h1>
    </div>
  )
}

export default Message
