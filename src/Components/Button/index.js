function Button(props) {
    return (
        <button className={props.buttonStyles}>{props.label}</button>
    );
}

export default Button;
