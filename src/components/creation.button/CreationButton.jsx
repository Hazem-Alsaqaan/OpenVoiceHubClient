import { MdOutlineAddToPhotos } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setMoodButton, toggleSettingBoxVisible } from "../../redux/reducers/publicVariablesSlice";
import "./CreationButton.css"


const CreationButton = ()=>{
    const dispatch = useDispatch()
    const handleCreate =()=>{
        dispatch(setMoodButton("create"))
        dispatch(toggleSettingBoxVisible())
    }
    return(
        <>
        <button className="create-btn" onClick={()=>handleCreate()}>
            Create New <MdOutlineAddToPhotos />
        </button>
        </>
    )
}

export default CreationButton