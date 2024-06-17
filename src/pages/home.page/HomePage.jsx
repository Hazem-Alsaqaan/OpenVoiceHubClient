import { useEffect } from "react"
import SideBar from "../../components/side.bar/SideBar"
import "./HomePage.css"
import { useDispatch, useSelector } from "react-redux"
import { getAllTasks } from "../../redux/actions/tasksActions"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"

const HomePage = () => {
    const { render } = useSelector((state) => state.publicVariablesSlice)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllTasks())
    }, [dispatch, render])
    return (
        <div className="home-page container">
            <SideBar />
            <Outlet />
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
        </div>
    )
}

export default HomePage