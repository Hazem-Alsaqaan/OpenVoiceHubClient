import SideBar from "../../components/side.bar/SideBar"
import "./Completed.css"

const Completed = ()=>{
    return(
        <div className="container">
            <SideBar/>
            <div className="tasks-container">
            <h1>completed</h1>
            </div>
        </div>
    )
}

export default Completed