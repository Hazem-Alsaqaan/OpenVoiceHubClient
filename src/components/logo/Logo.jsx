import "./Logo.css"
import logo from "../../assets/pictures/openVoiceHub.jpg"

const Logo = ()=>{
    return(
        <div className="logo-container">
            <img src={logo} alt="logo" className="logo-picture" />
            <h4 className="logo-text">Open Voice</h4>
        </div>
    )
}

export default Logo