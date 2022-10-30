const Button=(props)=>{

    return(
        <button className="btn" onClick={()=>{props.buttonClick()}}>{props.formshowed?'Hide':'Add Task'}</button>
    )
}
export default Button;