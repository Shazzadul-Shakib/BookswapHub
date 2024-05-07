
const Button = ({button_style,button_name}) => {
    return (
        <button className={button_style}>
            {button_name}
        </button>
    );
};

export default Button;