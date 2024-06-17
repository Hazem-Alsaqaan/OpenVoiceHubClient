/* eslint-disable react/prop-types */
import CustomButton from "../custom.button/CustomButton";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { BsCheckSquareFill } from "react-icons/bs";
import "./TaskBox.css"
import { setMoodButton, setRender, toggleSettingBoxVisible } from "../../redux/reducers/publicVariablesSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, getAllTasks, updateTask } from "../../redux/actions/tasksActions";
import CreateAndUpdateBox from "../create.and.update.box/CreateAndUpdateBox";
import { setUpateItem } from "../../redux/reducers/taskSlice";

const TaskBox = ({ item }) => {
    const { settingBoxVisible } = useSelector((state) => state.publicVariablesSlice)
    const dispatch = useDispatch()
    const updateCompletedStatus = () => {
        dispatch(updateTask({ id: item?._id, title: item?.title, description: item?.description, completed: item?.completed ? false : true }))
        dispatch(getAllTasks())
    }
    const handleUpdate = (item) => {
        dispatch(setMoodButton("update"))
        dispatch(setUpateItem(item))
        dispatch(toggleSettingBoxVisible())
    }
    const handleDelete = (item) => {
        dispatch(deleteTask({ id: item?._id }))
        dispatch(setRender())
    }
    return (
        <>
            <div className="box-container">
                <h1>{item?.title}</h1>
                <div className="single-box-content-container">
                    <p className="description">{item?.description}</p>
                    <div className="set-completed-container">
                        <h6 className={`${item?.completed ? "completed" : "notcompleted"} `}>{`${item?.completed ? "completed" : "inprogress..."} `}</h6>
                        <div onClick={() => updateCompletedStatus()}>
                            {!item?.completed ? <MdOutlineCheckBoxOutlineBlank /> : <BsCheckSquareFill />}
                        </div>
                    </div>
                    <div className="btn-container">
                        <CustomButton title={"delete"} icon={<RiDeleteBin6Line />} handleClick={() => handleDelete(item)} />
                        <CustomButton title={"update"} icon={<FaRegEdit />} handleClick={() => handleUpdate(item)} />
                    </div>
                </div>
            </div>
            {settingBoxVisible ? <CreateAndUpdateBox /> : null}
        </>
    )
}
export default TaskBox;