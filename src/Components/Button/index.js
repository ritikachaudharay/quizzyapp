function Button(props) {
    return (
        <button onClick={props.onClickHandler} className={props.buttonStyles} style={props.enableButton===true?{cursor:"not-allowed"}:{cursor:"pointer"}} disabled={props.enableButton}>{props.label}</button>
    );
}

export default Button;
