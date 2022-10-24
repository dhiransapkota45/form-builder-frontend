import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const baseUrl = "http://localhost:8000"
const initialState={
    response:[]
}

export const submissionsDetails = createAsyncThunk("submissions", async(formid)=>{
    const response = await fetch(`${baseUrl}/submission/submissions/${formid}`).then((response)=>response.json())
    return response
})

const submissionsDetailSlice = createSlice({
    name:"submissionsDetail",
    initialState,
    extraReducers:{
        [submissionsDetails.fulfilled]:(state, {payload})=>{
            state.response = payload.response 
        }
    }
})

export default submissionsDetailSlice.reducer
