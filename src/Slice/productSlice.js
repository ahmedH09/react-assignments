import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload)
        }
    }
})

// get action creator function
export const { addProduct } = productSlice.actions
// export reducer
export default productSlice.reducer