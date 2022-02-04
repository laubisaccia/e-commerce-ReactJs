import React, { createContext, useState } from "react";

export const cartContext = createContext();


const CartProvider = ({ children }) => {

    const[cart, setCart]=useState([]);

    const addToCart =(product, count)=>{
        if(IsInCart(product.id)){

            const indexItem= cart.findIndex(item => item.item.id === product.id);
            // console.log(Indexitem);
            cart[indexItem].count = cart[indexItem].count + count;
            setCart([...cart]);
        }else{
            setCart([...cart,{item:product, count:count}])
        } 
    }

    const deleteItem =(id)=>{
        const updatedCart = cart.filter(element => element.item.id !== id)
        setCart(updatedCart)
    }
    const IsInCart=(id)=>{
        return cart.some(item =>item.item.id ===id)

    }

    const clearCart =()=>{
        setCart([]);
    }
    return (
        <cartContext.Provider value={{cart, addToCart, deleteItem, clearCart}}>
            {children}
        </cartContext.Provider>
    )

};

export default CartProvider;