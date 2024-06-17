
import "./CustomButton.css"


// eslint-disable-next-line react/prop-types
const CustomButton = ({ title, icon, handleClick }) => {
    return (
        <button className={`custom-btn ${title}`} onClick={handleClick ? () => handleClick() : null}>
            {title} {icon}
        </button>
    )
}

export default CustomButton