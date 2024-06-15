import { LuSearch } from "react-icons/lu";
import "./search.css"


const Search = () => {
    return (
        <div className="search-container">
            <div className="search-form">
            <LuSearch className="search-icon"/>
                <input
                    type="search"
                    placeholder="search..."
                />
            </div>
            <button
            className="search-btn"
            >search</button>
        </div>
    )
}

export default Search