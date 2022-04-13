export const MessageList = (props) => {
  return (
    <div className="message">
      {props.messages.map((message, idx) => <p key={idx}>{message.author} : {message.value}</p >)}
    </div>
  )
}