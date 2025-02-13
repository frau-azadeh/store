export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    gender: "زنانه" | "مردانه" | "اسپورت";
    sizes: number[];
    colors: string[];
  }
  