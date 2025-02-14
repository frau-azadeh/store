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
        
    }
})


