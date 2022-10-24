import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modalSlice";
import formReducer from "./features/formSlice";
// import userReducer from "./features/userSlice";
import userloginReducer from "./features/userloginSlice";
import homepageReducer from "./features/homepageSlice";
import formsubmit from "./features/formsubmitSlice";
import submission from "./features/submissionSlice"
import submissionsDetail from "./features/submissionsDetailSlice";
import submissionDetail from "./features/submissionDetailSlice"

const store = configureStore({
  reducer: {
    modal: modalReducer,
    form: formReducer,
    // user: userReducer,
    userlogin: userloginReducer,
    homepageDetails: homepageReducer,
    formsubmit: formsubmit,
    submission,
    submissionsDetail,
    submissionDetail
  },
});

export default store;
