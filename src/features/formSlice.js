import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = `http://localhost:8000`;
const initialState = {
  loading: false,
  navigate: false,
  formname: "",
  formfields: [],
};

export const submitform = createAsyncThunk("/form/submit", async (form) => {
  const finalform = { user: localStorage.getItem("userid"), ...form };
  const responseRaw = await fetch(`${baseUrl}/form/saveform`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(finalform),
  });
  const response = await responseRaw.json();
  return response;
});

const formSlice = createSlice({
  name: "formcreate",
  initialState: initialState,
  reducers: {
    addFormname: (state, { payload }) => {
      state.formname = payload;
    },
    addfield: (state, { payload }) => {
      state.formfields.push(payload);
    },
    deleteField: (state, { payload }) => {
      state.formfields.splice(payload, 1);
    },
    deleteAllField: (state) => {
      state.formfields = [];
    },
    updatefield: (state, { payload }) => {
      state.formfields[payload.index].fieldname = payload.field.fieldname;
      state.formfields[payload.index].required = payload.field.required;
    },
    aftersubmit: (state) => {
      state.formname = "";
      state.formfields = [];
    },
  },
  extraReducers: {
    [submitform.pending]: (state) => {
      state.loading = true;
    },
    [submitform.fulfilled]: (state, { payload }) => {
      state.loading = false;
      if (payload.success) {
        state.navigate = true;
      }
    },
    [submitform.rejected]: () => {},
  },
});

export const {
  addfield,
  deleteField,
  deleteAllField,
  updatefield,
  addFormname,
  aftersubmit,
} = formSlice.actions;
export default formSlice.reducer;
