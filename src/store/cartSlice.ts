import { Product } from "@/types/products";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loadCartFormStorage = () =>{
    if(typeof window !== "undefined"){
        const storeCart = localStorage.getItem("cart");
        return storeCart ? JSON.parse(storeCart) : [];
    }
    return[];
};

interface CartItem extends Product{
    quantity: number;
}

interface CartState{
    items: CartItem[];
}

const initialState: CartState = {
    items: loadCartFormStorage(),
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart: (state, action: PayloadAction<Product>)=>{
            const exitingItem = state.items.find((item)=> item.id === action.payload.id);
            if(exitingItem){
                exitingItem.quantity += 1;
            } else{
                state.items.push({...action.payload, quantity: +1});
            }
            localStorage.setItem("cart", JSON.stringify(state.items))
        },
        removeFormCart: (state, action: PayloadAction<number>)=>{
            state.items = state.items.filter((item)=> item.id !== action.payload);
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        clearCart: (state) =>{
            state.items = [];
            localStorage.removeItem("cart");
        },
    },
});

export const {addToCart, removeFormCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;