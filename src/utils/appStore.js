import cartSlice from "./slices/cart.slice";
import { configureStore } from "@reduxjs/toolkit";

export default appStore = configureStore({
    reducer: {
        cart: cartSlice
    }
})