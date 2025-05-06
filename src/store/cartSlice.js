import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        addtoCart : (state , action) => {
            state.push(action.payload)
        },
        removeTocart : (state , action) => {
            const remain = state.filter((item) => item != action.payload)
            return remain;
        },
        clearCart : () => {
            return []
        }
    }
})

export const {addtoCart , removeTocart , clearCart} = cartSlice.actions
export default cartSlice.reducer