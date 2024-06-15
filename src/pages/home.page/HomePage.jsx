import SideBar from "../../components/side.bar/SideBar"
import TasksContainer from "../../components/tasks.container/TasksContainer"
import "./HomePage.css"

const HomePage = ()=>{
    return(
        <div className="home-page container">
            <SideBar/>
            <TasksContainer/>
        </div>
    )
}

export default HomePage