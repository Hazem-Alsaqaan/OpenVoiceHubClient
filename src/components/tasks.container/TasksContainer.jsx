import TaskBox from "../task.box/TaskBox"
import "./TasksContainer.css"
import Search from "../search/Search"
import CreationButton from "../creation.button/CreationButton"
const TasksContainer = () => {
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
        </div>
    )
}

export default TasksContainer