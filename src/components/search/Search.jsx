import { LuSearch } from "react-icons/lu";
import "./search.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchTasks } from "../../redux/actions/tasksActions";
import { useNavigate } from "react-router-dom";


const Search = () => {
    const navigate = useNavigate()
    const [searchText, setSearchText] = useState("")
    const dispatch = useDispatch()
    const handleSearchSubmit = ()=>{
        navigate("/search")
        dispatch(searchTasks({title: searchText}))
        setSearchText("")
    }
    return (
        <div className="search-container">
            <div className="search-form">
            <LuSearch className="search-icon"/>
                <input
                    type="search"
                    placeholder="search by task name..."
                    onChange={(e)=>setSearchText(e.target.value)}
                    value={searchText}
                    />
            </div>
            <button
            className="search-btn"
            onClick={()=>handleSearchSubmit()}
            >search</button>
        </div>
    )
}

export default Search