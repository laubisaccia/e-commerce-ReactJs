import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { cartContext } from "../context/CartProvider";
import CartItem from "./CartItem";

export default function Cart() {

    const { cart, clearCart, sumTotals, sumQuantityTotals } = useContext(cartContext);
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", flexWrap: 'wrap', width: "100%", marginTop: "7vh" }}>

                {cart.length === 0 ?
                    <div className="cart_div__empty">
                        <div className="cart-div__empty-message">Tu carrito esta vacio...</div>
                        <Link to="/"><Button variant="secondary">Ir a comprar!</Button></Link>
                    </div>
                    :
                    <div style={{ margin: "20px" }}>

                        <div className="cart_div__full">
                            {
                                cart.map(element => <CartItem key={element.item.id} prod={element} />)
                            }
                        </div>
                        <hr />
                        <h5>Total a pagar $ {sumTotals()}</h5>
                        <div>Cantidad total: {sumQuantityTotals()}</div>
                        <div>
                            <Button className="cart_div__full-buttons  " variant="light" onClick={() => clearCart()}>Clear cart</Button>
                            <Link to="/form"> <Button className="cart_div__full-buttons" variant="secondary"  >Finalizar compra</Button> </Link>
                        </div>

                    </div>
                }
            </div>
        </>
    )
}