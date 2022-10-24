import { createAsyncThunk, createSlice  } from "@reduxjs/toolkit";


const baseUrl = `http://localhost:8000`

const initialState = {
    loading:false,
    error:null,
    data:[]
}

export const loadFormDetails = createAsyncThunk("/form/details", async(userId)=>{
    const response = await fetch(`${baseUrl}/form/formdetails/${userId}`).then((response)=>response.json())
    return response
})

const homepageSlice = createSlice({
    name:"homepage",
    initialState,
    reducers:{},
    extraReducers:{
        [loadFormDetails.pending]:(state, action)=>{
            state.loading=true
        },
        [loadFormDetails.fulfilled]:(state, action)=>{
            state.loading=false
            state.data=action.payload
        },
        [loadFormDetails.rejected]:(state, action)=>{
            state.error=true
        }
    }
})

export default homepageSlice.reducer
