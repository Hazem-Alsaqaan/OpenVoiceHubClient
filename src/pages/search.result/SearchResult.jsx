import { useSelector } from "react-redux"
import TaskBox from "../../components/task.box/TaskBox"
import Search from "../../components/search/Search"
import CreationButton from "../../components/creation.button/CreationButton"


const SearchResult = () => {
    const { searchTasks } = useSelector((state) => state.taskSlice)
    return (
        <div className="tasks-container">
            <div className="to-side">
                <Search />
                <CreationButton />
            </div>
            <div className="task-boxes-container">
                {
                    searchTasks.map((item) => (
                        <TaskBox key={item?._id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}
export default SearchResult