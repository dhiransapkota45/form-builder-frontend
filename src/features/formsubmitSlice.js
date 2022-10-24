import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseUrl = "http://localhost:8000"
export const getform = createAsyncThunk("/form/getform", async(formid)=>{
    const response  = await fetch(`${baseUrl}/form/formdetail/${formid}`).then((res)=>res.json())
    return response
})

const initialState = {
    data:[]
}

const formsubmitSlice = createSlice({
    name:"formsubmitSLice",
    initialState,
    extraReducers:{
        [getform.fulfilled]:(state, {payload})=>{
            state.data = payload.form
        }
    }

})

export default formsubmitSlice.reducer