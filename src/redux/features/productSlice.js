import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducer:{}
})

export default productSlice.reducer