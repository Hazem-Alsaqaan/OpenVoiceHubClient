import SideBar from "../../components/side.bar/SideBar"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "./HomePage.css"

const HomePage = () => {
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