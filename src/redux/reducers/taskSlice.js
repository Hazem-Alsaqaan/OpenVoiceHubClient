import { createSlice } from "@reduxjs/toolkit"
import { createNewTask, deleteTask, getAllTasks, searchTasks, updateTask } from "../actions/tasksActions"


const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        tasksLoading: false,
        tasksError: null,
        searchTasks: [],
        searchTasksLoading: false,
        searchTasksError: null,
        updateItem: {}
    },
    reducers:{
        setUpateItem:(state,action)=>{
            state.updateItem = action.payload
        }
    },
    extraReducers:(builder)=>{
        // start read all task action handler
        builder.addCase(getAllTasks.pending, (state)=>{
            state.tasksLoading = true
            state.tasksError = null
        }),
        builder.addCase(getAllTasks.fulfilled, (state, action)=>{
            state.tasksLoading = false
            state.tasks = action.payload
        }),
        builder.addCase(getAllTasks.rejected, (state, action)=>{
            state.tasksLoading = false
            state.tasksError = action.payload
        }),
        // start update action handler
        builder.addCase(updateTask.pending, (state)=>{
            state.tasksLoading = true
            state.tasksError = null
        }),
        builder.addCase(updateTask.fulfilled, (state)=>{
            state.tasksLoading = false
        }),
        builder.addCase(updateTask.rejected, (state, action)=>{
            state.tasksLoading = false
            state.tasksError = action.payload
        }),
        // start create a new task handler
        builder.addCase(createNewTask.pending, (state)=>{
            state.tasksLoading = true
            state.tasksError = null
        }),
        builder.addCase(createNewTask.fulfilled, (state)=>{
            state.tasksLoading = false
        }),
        builder.addCase(createNewTask.rejected, (state, action)=>{
            state.tasksLoading = false
            state.tasksError = action.payload
        }),
        // start delete action handler
        builder.addCase(deleteTask.pending, (state)=>{
            state.tasksLoading = true
            state.tasksError = null
        }),
        builder.addCase(deleteTask.fulfilled, (state)=>{
            state.tasksLoading = false
        }),
        builder.addCase(deleteTask.rejected, (state, action)=>{
            state.tasksLoading = false
            state.tasksError = action.payload
        }),
        // start search action handler
        builder.addCase(searchTasks.pending, (state)=>{
            state.searchTasksLoading = true
            state.searchTasksError = null
        }),
        builder.addCase(searchTasks.fulfilled, (state, action)=>{
            state.searchTasksLoading = false
            state.searchTasks = action.payload
        }),
        builder.addCase(searchTasks.rejected, (state, action)=>{
            state.searchTasksLoading = false
            state.searchTasksError = action.payload
        })
    }
})
export const {setUpateItem} = taskSlice.actions
export default taskSlice.reducer