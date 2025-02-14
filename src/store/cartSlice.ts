import { Product } from "@/types/products";
import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = () =>{
    if (typeof window !== "undefined"){
        const storeCart = localStorage.getItem("cart");
        return storeCart ? JSON.parse(storeCart) : [];
    }
    return [];
}

interface CartItem extends Product{
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: loadCartFromStorage(),
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart: (state, action: PlayloadAction<Product>)=>{
            const exitingItem = state.items.find((item)=>item.id === action.playload.id);
            if(exitingItem){
                exitingItem.quantity += 1 ;
            }else{
                state.items.push({...action.playload, quantity: 1});
            }
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
    
    }
})


