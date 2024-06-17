import CustomButton from "../custom.button/CustomButton"
import { LuSendHorizonal } from "react-icons/lu";

import "./ContactForm.css"
import { useState } from "react";
import { toast } from "react-toastify";


const ContactForm = () => {
    const [senderName, setSenderName] = useState("")
    const [senderEmail, setSenderEmail] = useState("")
    const [senderMessage, setSenderMessage] = useState("")
    const handleSubmitMessage =(e)=>{
        e.preventDefault()
        toast.success(`your message is ${senderMessage}, and It has been sent successfully`)
        setSenderMessage("")
        setSenderEmail("")
        setSenderName("")
    }
    return (
        <div className="contact-form-container">
            <div className="contact-title">
                <h2>contact us</h2>
                <p>we are here to help and answer any question you might have</p>
                <h4>drop us aline</h4>
            </div>
            <form onSubmit={(e)=>handleSubmitMessage(e)}>
                <input
                    className="form-input"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    value={senderName}
                    onChange={(e)=>setSenderName(e.target.value)}
                />
                <input
                    className="form-input"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                    value={senderEmail}
                    onChange={(e)=>setSenderEmail(e.target.value)}
                />
                <textarea
                    className="text-area-message form-input"
                    required
                    maxLength={800}
                    placeholder="message..."
                    value={senderMessage}
                    onChange={(e)=>setSenderMessage(e.target.value)}
                    ></textarea>
                <CustomButton title={"send"} icon={<LuSendHorizonal />
}/>
            </form>
        </div>
    )
}

export default ContactForm