import { configureStore } from "@reduxjs/toolkit";
import GlobalSlice from "./GlobalContext/globalSlice";


const store = configureStore({
    reducer: {
        GlobalSlice:GlobalSlice
    }
})


export default store;