import { useEffect, useState } from "react"
import SideBar from "../../components/side.bar/SideBar"
import "./Completed.css"
import { useDispatch, useSelector } from "react-redux"
import { getAllTasks } from "../../redux/actions/tasksActions"
import TaskBox from "../../components/task.box/TaskBox"

const Completed = ()=>{
    const dispatch = useDispatch()
    const {render} = useSelector((state)=>state.publicVariablesSlice)
    const {tasks} = useSelector((state)=>state.taskSlice)
    const [completedTasks, setCompletedTasks] = useState([])

    useEffect(()=>{
        dispatch(getAllTasks())
        setCompletedTasks(tasks.filter((item)=>(
            item.completed === true
        )))
    },[dispatch, render, tasks])
    return(
        <div className="container">
            <SideBar/>
            <div className="tasks-container">
            <h3>completed tasks</h3>
            <div className="completed-tasks-container">
            {
                completedTasks.map((item)=>(
                    <TaskBox key={item?._id} item={item}/>
                ))
            }
            </div>
            </div>
        </div>
    )
}

export default Completed