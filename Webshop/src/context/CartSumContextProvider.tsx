import { ReactNode, useState } from 'react';
import { CartSumContext } from "./CartSumContext";
import { CartProduct } from '../models/CartProduct';

export const CartSumContextProvider = ({children}:{children: ReactNode} ) => {
    const [cartSum, setCartSum] = useState(calculateCartSum());

    function calculateCartSum() {
        const products: CartProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");
        return products.reduce((total, cp) => total + cp.product.price * cp.quantity, 0);
    }

    return (
    <CartSumContext.Provider value={{cartSum, setCartSum}} >
        {children}
    </CartSumContext.Provider>
)
}

//edasijõudnute võimalus: Redux.