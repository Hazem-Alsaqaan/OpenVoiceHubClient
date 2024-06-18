import { createSlice } from "@reduxjs/toolkit"

const publicVariablesSlice = createSlice({
    name: "publicVariables",
    initialState:{
        settingBoxVisible: false,
        moodButton: "",
        render: false
    },
    reducers:{
        toggleSettingBoxVisible(state){
            state.settingBoxVisible = !state.settingBoxVisible
        },
        setMoodButton(state, action){
            state.moodButton = action.payload
        },
        setRender:(state, action)=>{
            state.render = action.payload
        }
    }
})

export const {toggleSettingBoxVisible, setMoodButton, setRender} = publicVariablesSlice.actions
export default publicVariablesSlice.reducer