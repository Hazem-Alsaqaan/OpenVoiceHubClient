
import { useNavigate } from "react-router-dom"
import SideBar from "../../components/side.bar/SideBar"
import "./AboutPage.css"

const AboutPage = ()=>{
    const navigate = useNavigate()
    return(
        <div className="container">
              <SideBar/>
            <div className="tasks-container">
            <div className="about-container">
                <div className="about-center">
                    <h3>open voice</h3>
                    <h1>optimizer</h1>
                    <p>this platform can determine the importance of your tasks. allowing you to be more efficient in your dialy operations</p>
                    <div className="btn-container">
                        <button onClick={()=>navigate("/")} className="custom-btn">get started</button>
                        </div>
                </div>

            </div>
            </div>
        </div>
    )
}

export default AboutPage