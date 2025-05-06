import { createSlice } from "@reduxjs/toolkit";
const filterslice = createSlice({
    name : 'filter',
    initialState : 'all',
    reducers : {
        setFilter : (state , action) => action.payload
    }
})

export const {setFilter} = filterslice.actions;
export default filterslice.reducer;
