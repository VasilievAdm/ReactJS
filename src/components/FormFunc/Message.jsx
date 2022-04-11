export const Message = (props) => {
    return <div className="message">
        {props.send.map(message => <p key={message.toString()}>{message}</p >)}
    </div>
};