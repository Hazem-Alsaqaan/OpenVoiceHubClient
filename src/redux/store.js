import {configureStore} from "@reduxjs/toolkit"
import publicVariablesSlice from "./reducers/publicVariablesSlice"



const store = configureStore({
    reducer:{
        publicVariablesSlice: publicVariablesSlice,
    }
})

export default store