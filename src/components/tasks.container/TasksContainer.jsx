import TaskBox from "../task.box/TaskBox"
import "./TasksContainer.css"
import Search from "../search/Search"
import CreationButton from "../creation.button/CreationButton"
import { useSelector } from "react-redux"


const TasksContainer = () => {
    const {tasks} = useSelector((state)=>state.taskSlice)
    return (
        <div className="tasks-container">
            <div className="to-side">
                <Search />
                <CreationButton />
            </div>
            <div className="task-boxes-container">
                {
                    tasks.map((item)=>(
                        <TaskBox key={item?._id} item = {item}/>
                    ))
                }        
            </div>
        </div>
    )
}

export default TasksContainer