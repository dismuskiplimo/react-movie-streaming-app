const Button = (props) => {
  return (
    <button onClick={props.onClick} className={`py-2 px-4 shadow-md rounded-md ${props.className}`} type = {props.type}>{props.label}</button>
  )
}

export default Button