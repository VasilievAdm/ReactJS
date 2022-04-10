export const Button = (props) => {
  return <button className='button' onClick={props.click}>{props.name}</button>
}