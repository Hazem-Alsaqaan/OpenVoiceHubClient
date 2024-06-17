import {configureStore} from "@reduxjs/toolkit"
import publicVariablesSlice from "./reducers/publicVariablesSlice"
import taskSlice from "./reducers/taskSlice"



const store = configureStore({
    reducer:{
        publicVariablesSlice: publicVariablesSlice,
        taskSlice: taskSlice,
    }
})

export default store