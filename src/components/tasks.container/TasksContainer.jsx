import TaskBox from "../task.box/TaskBox"
import "./TasksContainer.css"
import Search from "../search/Search"
import CreationButton from "../creation.button/CreationButton"
import CreateAndUpdateBox from "../create.and.update.box/CreateAndUpdateBox"
import { useSelector } from "react-redux"


const TasksContainer = () => {
    const {settingBoxVisible} = useSelector((state)=>state.publicVariablesSlice)
    return (
        <div className="tasks-container">
            <div className="to-side">
                <Search />
                <CreationButton />
            </div>
            <div className="task-boxes-container">
                <TaskBox />
                <TaskBox />
                <TaskBox />
                <TaskBox />
                <TaskBox />
                <TaskBox />
                <TaskBox />
                <TaskBox />
            </div>
            {settingBoxVisible ? <CreateAndUpdateBox/> : null}
        </div>
    )
}

export default TasksContainer