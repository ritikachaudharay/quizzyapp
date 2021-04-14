function Button(props) {
    return (
        <button onClick={props.onClickHandler} className={props.buttonStyles} style={{cursor:"pointer"}}>{props.label}</button>
    );
}

export default Button;
