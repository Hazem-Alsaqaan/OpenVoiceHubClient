import { createSlice } from "@reduxjs/toolkit"

const publicVariablesSlice = createSlice({
    name: "publicVariables",
    initialState:{
        settingBoxVisible: false,
        moodButton: ""
    },
    reducers:{
        toggleSettingBoxVisible(state){
            state.settingBoxVisible = !state.settingBoxVisible
        },
        setMoodButton(state, action){
            state.moodButton = action.payload
        }
    }
})

export const {toggleSettingBoxVisible, setMoodButton} = publicVariablesSlice.actions
export default publicVariablesSlice.reducer