import { useSelector } from "react-redux"
import TaskBox from "../../components/task.box/TaskBox"
import Search from "../../components/search/Search"
import CreationButton from "../../components/creation.button/CreationButton"


const SearchResult = () => {
    const { searchTasks , searchTasksLoading} = useSelector((state) => state.taskSlice)
    return (
        <div className="tasks-container">
            <div className="to-side">
                <Search />
                <CreationButton />
            </div>
            <div className="task-boxes-container">
            { searchTasksLoading ? <h4>loading...</h4>
                    : searchTasks.length > 0 ? searchTasks.map((item) => (
                        <TaskBox key={item?._id} item={item} />
                    ))
                    : <h4>No tasks found...</h4>
                }
            </div>
        </div>
    )
}
export default SearchResult