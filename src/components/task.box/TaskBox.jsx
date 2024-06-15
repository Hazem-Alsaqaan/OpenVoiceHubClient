import "./TaskBox.css"

const TaskBox =()=>{
    return (
        <div className="box-container">
            <h1>Task One</h1>
            <div>
            <p className="description">Box Shadows Background color. Border color. Border radius.</p>
            <h6 className={`notcompleted`}>completed</h6>
            </div>
        </div>
    )
}
export default TaskBox;