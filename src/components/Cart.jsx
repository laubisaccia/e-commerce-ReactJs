import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { Card, Button } from "react-bootstrap";
import { cartContext } from "../context/CartProvider";
import CartItem from "./CartItem";

export default function Cart() {

    const { cart, clearCart } = useContext(cartContext);
    console.log("carro",cart);
    return (

        <>
        {cart.length === 0?
    <div>
        <div>Empty cart</div>
        <Link to="/">Go to shop</Link>
        </div>
        :
        <div style={{ margin: "20px" }}>
              
        {
            cart.map(element => <CartItem key={element.item.id} prod={element} />)
           
        }
         <button onClick={()=>clearCart()}>Clear cart</button>
    </div>
    }
           
            
        </>



    )
   
}