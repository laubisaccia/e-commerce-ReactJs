import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Card, Button } from "react-bootstrap";
import { cartContext } from "../context/CartProvider";
import CartItem from "./CartItem";

export default function Cart() {

    const { cart, clearCart, sumTotals, sumQuantityTotals } = useContext(cartContext);
    const [total, setTotal] = useState(0);
    const [quantityTotal, setQuantityTotal] = useState(0);
    console.log("carro", cart);


    useEffect(() => {
        setTotal(sumTotals());
        
    }, [sumTotals])
    useEffect(() => {
        
        setQuantityTotal(sumQuantityTotals());
    }, [sumQuantityTotals])

    return (

        <>
            total a pagar:{total}
            cantidad total:{quantityTotal}
            {cart.length === 0 ?
                <div>
                    <div>Empty cart</div>
                    <Link to="/">Go to shop</Link>
                </div>
                :
                <div style={{ margin: "20px" }}>

                    {
                        cart.map(element => <CartItem key={element.item.id} prod={element} />)

                    }
                    <button onClick={() => clearCart()}>Clear cart</button>
                </div>
            }


        </>



    )

}