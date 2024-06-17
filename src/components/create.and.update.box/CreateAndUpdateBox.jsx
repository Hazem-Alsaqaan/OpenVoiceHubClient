/* eslint-disable react/prop-types */
import { MdOutlineAddToPhotos } from "react-icons/md";
import CustomButton from "../custom.button/CustomButton"
import { FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setRender, toggleSettingBoxVisible } from "../../redux/reducers/publicVariablesSlice";
import { TiDelete } from "react-icons/ti";
import "./CreateAndUpdateBox.css"
import { createNewTask, updateTask } from "../../redux/actions/tasksActions";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const CreateAndUpdateBox =()=>{
    const dispatch = useDispatch()
    const {moodButton} = useSelector((state)=>state.publicVariablesSlice)
    const {updateItem} = useSelector((state)=>state.taskSlice)
    const [title, setTitle] = useState(moodButton === "update" ? updateItem?.title : "")
    const [description, setDescription] = useState(moodButton === "update" ? updateItem?.description : "")

    const createNewTaskSubmit = ()=>{
        dispatch(createNewTask({ title: title, description: description , completed: false}))
        dispatch(setRender())
        dispatch(toggleSettingBoxVisible())
        setTitle("")
        setDescription("")
    }
    const handleUpdateSubmit = ()=>{
        dispatch(updateTask({id: updateItem?._id, title: title, description: description ,completed: updateItem?.completed}))
        dispatch(setRender())
        dispatch(toggleSettingBoxVisible())
        setTitle("")
        setDescription("")
    }
    return(
        <div className="create-and-update-box">
            <div className="upper-side">
            <p>{`${moodButton} task`}</p>
            <TiDelete onClick={()=> dispatch(toggleSettingBoxVisible())}/>
            </div>
            <input
            required
            type="text"
            placeholder="Title..."
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
            maxLength={40}
            />
            <textarea
            onChange={(e)=>setDescription(e.target.value)}
            value={description}
            maxLength={80}
            placeholder="description..."></textarea>
            <CustomButton title={moodButton} handleClick={moodButton === "create" ? createNewTaskSubmit : handleUpdateSubmit} icon={moodButton === "create" ?<MdOutlineAddToPhotos />: <FaRegEdit />}/>
        </div>
    )
}

export default CreateAndUpdateBox