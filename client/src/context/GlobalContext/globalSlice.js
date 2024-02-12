import { createSlice } from "@reduxjs/toolkit";
import { windowWidthHeightReducer } from "./reducers/windowWidthHeight";


const initialState = {
    width: window.innerWidth,
    height: window.innerHeight
};


const GlobalSlice = createSlice({
    name: 'GlobalSlice',  
    initialState: initialState,  
    reducers: {
        setWindowWidthHeight: windowWidthHeightReducer  
    }
});


export const { setWindowWidthHeight } = GlobalSlice.actions;
export default GlobalSlice.reducer;  