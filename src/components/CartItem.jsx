import React, { useContext } from "react";
import { cartContext } from "../context/CartProvider";



export default function CartItem({ prod }) {


    const { deleteItem } = useContext(cartContext);

    return (
        <>
            <div >{prod.item.product} - quantity:{prod.count}
            </div>
            <button onClick={() => deleteItem(prod.item.id)}>Delete</button>
        </>

    )
}
