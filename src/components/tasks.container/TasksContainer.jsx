import TaskBox from "../task.box/TaskBox"
import "./TasksContainer.css"
import Search from "../search/Search"
import CreationButton from "../creation.button/CreationButton"
import { useSelector } from "react-redux"
import WelcomeMessage from "../welcome.message/WelcomeMessage"


const TasksContainer = () => {
    const {tasks, tasksLoading} = useSelector((state)=>state.taskSlice)
    return (
        <div className="tasks-container">
            <WelcomeMessage/>
            <div className="to-side">
                <Search />
                <CreationButton />
            </div>
            <div className="task-boxes-container">
                { tasksLoading ? <h4>loading...</h4>
                   : tasks.length > 0 ? tasks.map((item)=>(
                        <TaskBox key={item?._id} item = {item}/>
                    ))
                    : <h4>No tasks found...</h4>
                }        
            </div>
        </div>
    )
}

export default TasksContainer