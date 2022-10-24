import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const baseUrl = "http://localhost:8000"

const initialState = {
    navigate:false
}

export const submission = createAsyncThunk("/form/submission", async(submissiondetails)=>{
    const {formid} = submissiondetails
    delete submissiondetails.formid

    const response = await fetch(`${baseUrl}/submission/submission/${formid}`, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(submissiondetails)
    }).then((response)=>response.json())
    return response

})

const submissionSlice = createSlice({
    name:"submission",
    initialState,
    reducers:{
        navigateController:(state)=>{
            state.navigate=false
        }
    },
    extraReducers:{
        [submission.fulfilled]:(state, action)=>{
            state.navigate=true
        }
    }
})

export const {navigateController} = submissionSlice.actions
export default submissionSlice.reducer