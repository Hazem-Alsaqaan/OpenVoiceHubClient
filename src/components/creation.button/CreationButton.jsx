import { MdOutlineAddToPhotos } from "react-icons/md";
import "./CreationButton.css"


const CreationButton = ()=>{
    return(
        <>
        <button className="create-btn">
            Create New <MdOutlineAddToPhotos />
        </button>
        </>
    )
}

export default CreationButton