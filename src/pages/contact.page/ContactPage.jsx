
import { ToastContainer } from "react-toastify"
import ContactForm from "../../components/contact.form/ContactForm"
import ContactHelp from "../../components/contact.help/ContactHelp"
import SideBar from "../../components/side.bar/SideBar"
import "./ContactPage.css"

const ContactPage = ()=>{
    return(
        <>
        <div className="container">
            <SideBar/>
            <div className="tasks-container">
            <div className="contact-page-container">
            <ContactForm/>
            <ContactHelp/>
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

export default ContactPage