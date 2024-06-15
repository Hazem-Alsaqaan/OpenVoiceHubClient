import CustomButton from "../custom.button/CustomButton";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { BsCheckSquareFill } from "react-icons/bs";

import "./TaskBox.css"
import { useState } from "react";
import { setMoodButton, toggleSettingBoxVisible } from "../../redux/reducers/publicVariablesSlice";
import { useDispatch } from "react-redux";

const TaskBox =()=>{
    const dispatch = useDispatch()

    const [completed, setCompleted] = useState(false)
    const updateCompletedStatus = ()=>{
        setCompleted((prev)=>!prev)
    }
    const handleUpdate =()=>{
        dispatch(setMoodButton("update"))
        dispatch(toggleSettingBoxVisible())
    }
    const handleDelete =()=>{
        console.log("handle delete")
    }
    return (
        <div className="box-container">
            <h1>Task One</h1>
            <div>
            <p className="description">Box Shadows Background color. Border color. Border radius.</p>
            <div className="set-completed-container">
            <h6 className={`${completed ? "completed" : "notcompleted"} `}>{`${completed ? "completed" : "inprogress"} `}</h6>
            <div onClick={()=>updateCompletedStatus()}>
            {!completed? <MdOutlineCheckBoxOutlineBlank /> : <BsCheckSquareFill />}
            </div>
            </div>
            <div className="btn-container">
            <CustomButton title={"delete"} icon={<RiDeleteBin6Line />} handleClick={handleDelete}/>
            <CustomButton title={"update"} icon={<FaRegEdit />} handleClick={handleUpdate}/>
            </div>
            </div>
        </div>
    )
}
export default TaskBox;