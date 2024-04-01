const Button = (props) => {
  return (
    <button onClick={props.onClick} className={`p-2 shadow-md rounded-md ${props.className}`} type = {props.type}>{props.label}</button>
  )
}

export default Button