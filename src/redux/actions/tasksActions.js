import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"


export const getAllTasks = createAsyncThunk("task/getSllTasks", async(_, thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try{
        const response = await axios.get(`http://localhost:4001/api/v1/openvoicehub/taskes`)
        return response.data
    }catch(err){
        if(err.message === "Network Error"){
            toast.error("Check Your Network")
            return rejectWithValue(err.message)
        }else if(!err.response){
            throw err
        }
        toast.error(err.response.data.message)
        return rejectWithValue(err.response.data.message)
    }
})
export const createNewTask = createAsyncThunk("task/createNewTask", async(item, thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try{
        const response = await axios.post(`http://localhost:4001/api/v1/openvoicehub/taskes`, {
            title: item?.title,
            description: item?.description,
            completed: item?.completed
        })
        toast.success("Success add new task")
        return response.data
    }catch(err){
        if(err.message === "Network Error"){
            toast.error("Check Your Network")
            return rejectWithValue(err.message)
        }else if(!err.response){
            throw err
        }
        toast.error(err.response.data.message)
        return rejectWithValue(err.response.data.message)
    }
})
export const updateTask = createAsyncThunk("task/updateTask", async(item, thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try{
        const response = await axios.patch(`http://localhost:4001/api/v1/openvoicehub/taskes/${item?.id}`, {
            title: item?.title,
            description: item?.description,
            completed: item?.completed
        })
        toast.success("Success update task")
        return response.data
    }catch(err){
        if(err.message === "Network Error"){
            toast.error("Check Your Network")
            return rejectWithValue(err.message)
        }else if(!err.response){
            throw err
        }
        toast.error(err.response.data.message)
        return rejectWithValue(err.response.data.message)
    }
})
export const deleteTask = createAsyncThunk("task/deleteTask", async(item, thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try{
        const response = await axios.delete(`http://localhost:4001/api/v1/openvoicehub/taskes/${item?.id}`)
        toast.success("Success delete task")
        return response.data
    }catch(err){
        if(err.message === "Network Error"){
            toast.error("Check Your Network")
            return rejectWithValue(err.message)
        }else if(!err.response){
            throw err
        }
        toast.error(err.response.data.message)
        return rejectWithValue(err.response.data.message)
    }
})
export const searchTasks = createAsyncThunk("task/searchTask", async(item, thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try{
        const response = await axios.post(`http://localhost:4001/api/v1/openvoicehub/search`,
            {
                title: item?.title
            }
        )
        return response.data
    }catch(err){
        if(err.message === "Network Error"){
            toast.error("Check Your Network")
            return rejectWithValue(err.message)
        }else if(!err.response){
            throw err
        }
        toast.error(err.response.data.message)
        return rejectWithValue(err.response.data.message)
    }
})