const Input = (props) => {
    return(
        <input type="text" name="name" onChange={(e) => props.handlerChange(e.target.value)} />
    )
}

export default Input;