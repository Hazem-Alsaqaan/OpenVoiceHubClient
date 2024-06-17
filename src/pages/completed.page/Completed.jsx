import { useEffect, useState } from "react"
import SideBar from "../../components/side.bar/SideBar"
import { useDispatch, useSelector } from "react-redux"
import { getAllTasks } from "../../redux/actions/tasksActions"
import TaskBox from "../../components/task.box/TaskBox"
import { ToastContainer } from "react-toastify"

const Completed = () => {
    const dispatch = useDispatch()
    const { render } = useSelector((state) => state.publicVariablesSlice)
    const { tasks } = useSelector((state) => state.taskSlice)
    const [completedTasks, setCompletedTasks] = useState([])

    useEffect(() => {
        dispatch(getAllTasks())
        setCompletedTasks(tasks.filter((item) => (
            item.completed === true
        )))
    }, [dispatch, render, tasks])
    return (
        <>
            <div className="container">
                <SideBar />
                <div className="tasks-container">
                    <h3>completed tasks</h3>
                    <div className="task-boxes-container">
                        {
                            completedTasks.length > 0 ? completedTasks.map((item) => (
                                <TaskBox key={item?._id} item={item} />
                            ))
                            : <h4>No completed tasks found...</h4>
                        }
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    )
}

export default Completed