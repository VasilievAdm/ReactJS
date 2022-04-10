export const Message = (props) => {
    return <div className="message">
        {props.send.map((message) => <p>{message}</p >)}
    </div>
};