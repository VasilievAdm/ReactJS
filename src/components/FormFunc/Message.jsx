export const Message = (props) => {
    return <div className="message">
        {props.send.map((message, idx) => <p key={idx}>{message}</p >)}
    </div>
};