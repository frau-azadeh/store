import { Product } from "@/types/products";

const loadCartFromStorage = () =>{
    if(typeof window !== "undefined"){
        const storeCart = localStorage.getItem("cart");
        return storeCart? JSON.parse(storeCart) : [];
    }
}

interface CartItem extends Product{
    quantity: number;
}

interface CartState{
    items: CartItem[];
}

