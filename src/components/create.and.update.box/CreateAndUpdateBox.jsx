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
const CreateAndUpdateBox = () => {
    const dispatch = useDispatch()
    const { moodButton } = useSelector((state) => state.publicVariablesSlice)
    const { updateItem } = useSelector((state) => state.taskSlice)
    const [title, setTitle] = useState(moodButton === "update" ? updateItem?.title : "")
    const [description, setDescription] = useState(moodButton === "update" ? updateItem?.description : "")

    const createNewTaskSubmit = (e) => {
        e.preventDefault()
        dispatch(createNewTask({ title: title, description: description, completed: false }))
        dispatch(setRender(true))
        dispatch(toggleSettingBoxVisible())
        setTitle("")
        setDescription("")
    }
    const handleUpdateSubmit = (e) => {
        e.preventDefault()
        dispatch(updateTask({ id: updateItem?._id, title: title, description: description, completed: updateItem?.completed }))
        dispatch(setRender(true))
        dispatch(toggleSettingBoxVisible())
        setTitle("")
        setDescription("")
    }
    return (
        <div className="create-and-update-box">
            <div className="upper-side">
                <p>{`${moodButton} task`}</p>
                <TiDelete onClick={() => dispatch(toggleSettingBoxVisible())} />
            </div>
            <form onSubmit={moodButton === "create" ? (e) => createNewTaskSubmit(e) : (e) => handleUpdateSubmit(e)}>
                <input
                    className="form-input"
                    required
                    type="text"
                    placeholder="* Title..."
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    maxLength={40}
                />
                <textarea
                    className="text-area-message form-input"
                    required
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    maxLength={80}
                    placeholder="* description..."></textarea>
                <CustomButton title={moodButton} icon={moodButton === "create" ? <MdOutlineAddToPhotos /> : <FaRegEdit />} />
            </form>
        </div>
    )
}

export default CreateAndUpdateBox