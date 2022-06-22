import s from "./Button.module.css";
import PropTypes from "prop-types"

function Button({onClick}){
    return (
        <div className={s.ButtonSection}>
             <button className={s.Button} type="button" onClick={onClick}>Load more</button>
            </div>
        );
    
};
Button.propTypes = {
    onClick: PropTypes.func.isRequired
};
export default Button;