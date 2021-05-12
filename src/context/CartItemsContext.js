import React, { useState } from "react";

export const CartItemsContext = React.createContext();

export const CartItemsProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    return (
        <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
            { children }
        </CartItemsContext.Provider>
    )
}