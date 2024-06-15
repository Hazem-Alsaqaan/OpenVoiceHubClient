import { MdOutlineAddToPhotos } from "react-icons/md";
import CustomButton from "../custom.button/CustomButton"
import { FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleSettingBoxVisible } from "../../redux/reducers/publicVariablesSlice";
import { TiDelete } from "react-icons/ti";
import "./CreateAndUpdateBox.css"

const CreateAndUpdateBox =()=>{
    const dispatch = useDispatch()
    const {moodButton} = useSelector((state)=>state.publicVariablesSlice)
    const createNewTask = ()=>{
        console.log("Create new task clicked")
        dispatch(toggleSettingBoxVisible())
    }
    const handleUpdateSubmit = ()=>{
        console.log("updated")
        dispatch(toggleSettingBoxVisible())
    }
    return(
        <div className="create-and-update-box">
            <div className="upper-side">
            <p>{`${moodButton} task`}</p>
            <TiDelete onClick={()=> dispatch(toggleSettingBoxVisible())}/>
            </div>
            <input
            type="text"
            placeholder="Title..."
            />
            <textarea placeholder="description..."></textarea>
            <CustomButton title={moodButton} handleClick={moodButton === "create" ? createNewTask : handleUpdateSubmit} icon={moodButton === "create" ?<MdOutlineAddToPhotos />: <FaRegEdit />}/>
        </div>
    )
}

export default CreateAndUpdateBox