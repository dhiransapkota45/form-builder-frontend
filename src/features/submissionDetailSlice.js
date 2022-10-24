import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "http://localhost:8000";
const initialState = {
    data:[]
};

export const submissionDetails = createAsyncThunk(
  "submission",
  async (submissionid) => {
    const response = await fetch(
      `${baseUrl}/submission/submission/${submissionid}`
    ).then((response) => response.json());
    return response;
  }
);

const submissionDetailSlice = createSlice({
    name:"submissionDetail", 
    initialState,
    extraReducers:{
        [submissionDetails.fulfilled]:(state, {payload})=>{
            state.data = payload.response
        }
    }
})

export default submissionDetailSlice.reducer