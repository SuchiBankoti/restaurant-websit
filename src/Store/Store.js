import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./CreateSlice"

export const store = configureStore({
    reducer: {
        menu:menuReducer
    }
})
