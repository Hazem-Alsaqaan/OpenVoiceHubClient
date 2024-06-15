import TaskBox from "../task.box/TaskBox"
import "./TasksContainer.css"
import Search from "../search/Search"
const TasksContainer =()=>{
    return(
        <div className="tasks-container">
            <Search/>
           <div className="task-boxes-container">
           <TaskBox/>
            <TaskBox/>
            <TaskBox/>
            <TaskBox/>
           <TaskBox/>
            <TaskBox/>
            <TaskBox/>
            <TaskBox/>
           </div>
        </div>
    )
}

export default TasksContainer