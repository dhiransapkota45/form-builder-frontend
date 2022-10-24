import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseurl = `http://localhost:8000`;

export const loginUser = createAsyncThunk("/user/login", async (user) => {
  const responseRaw = await fetch(`${baseurl}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const response = await responseRaw.json();
  return response;
});

export const signupUser = createAsyncThunk("/user/signup", async (user) => {
  const responseRaw = await fetch(`${baseurl}/user/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const response = await responseRaw.json();
  return response;
});

const initialState = {
  loading: false,
  error: null,
  success: localStorage.getItem("userid") ? true : false,
};
const userloginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userid");
      state.success = false;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      if (payload.success) {
        localStorage.setItem("userid", payload.user[0]._id);
        state.success = true;
        state.error = null;
      } else {
        state.success = false;
        state.error = payload.msg || "error!";
      }
    },
    [loginUser.rejected]: (state) => {
      state.loading = false;
      state.error = "some error occured";
    },
    [signupUser.pending]: (state) => {
      state.loading = true;
    },
    [signupUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      if (payload.success) {
        state.error = null
        localStorage.setItem("userid", payload.user._id);
        state.success = true;
      } else {
        state.success = false;
        state.error = payload.msg || "error!";
      }
    },
    [signupUser.rejected]: (state) => {
      state.loading = false;
      state.error = "some error occured";
    },
  },
});

export const { logout } = userloginSlice.actions;
export default userloginSlice.reducer;
