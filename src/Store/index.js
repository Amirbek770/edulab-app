import { configureStore } from "@reduxjs/toolkit";
import  userStateSlice  from "./userStateSlice";

export const store = configureStore({
    reducer:{
        userState: userStateSlice,
    }
})