function Button(props) {
    return (
        <button onClick={props.onClickHandler} className={props.buttonStyles}>{props.label}</button>
    );
}

export default Button;
