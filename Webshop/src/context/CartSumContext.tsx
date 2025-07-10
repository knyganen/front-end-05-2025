import { createContext } from "react";


export const CartSumContext = createContext({
    cartSum: 0,
    setCartSum: (_newValue: number) => {}
});