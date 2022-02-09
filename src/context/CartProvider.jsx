import React, { createContext, useState } from "react";

export const cartContext = createContext();


const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    // const [quantityTotal, setQuantityTotal] = useState(0);

    const addToCart = (product, count) => {
        if (IsInCart(product.id)) {

            const indexItem = cart.findIndex(item => item.item.id === product.id);
            cart[indexItem].count = cart[indexItem].count + count;
            setCart([...cart]);
        } else {
            setCart([...cart, { item: product, count: count }])
        }
    }

    const deleteItem = (id) => {
        const updatedCart = cart.filter(element => element.item.id !== id)
        setCart(updatedCart)
    }
    const IsInCart = (id) => {
        return cart.some(item => item.item.id === id)
    }

    const sumTotals = () => {
        return (cart.length > 0) ? cart.map((item) => item.item.prize * item.count).reduce((a, b) => a + b) : 0;

    }

    const sumQuantityTotals = () => {

        return (cart.length > 0) ? cart.reduce((a, b) => a + b.count, 0) : 0;


    }


    const clearCart = () => {
        setCart([]);

    }
    return (
        <cartContext.Provider value={{ cart, addToCart, deleteItem, clearCart, sumTotals, sumQuantityTotals }}>
            {children}
        </cartContext.Provider>
    )

};

export default CartProvider;