import React, { useContext } from "react";
import { cartContext } from "../context/CartProvider";
import { Button } from 'react-bootstrap'

export default function CartItem({ prod }) {
    const { deleteItem } = useContext(cartContext);

    return (
        <>
            <div className="cartItem_container">
                <img className="cartItem_image" src={prod.item.img} alt="productPicture" />
                <div className="cartItem_info">
                    <div><b>{prod.item.product}</b></div>
                    <div>Cantidad: {prod.count}</div>
                    <div>Precio Unidad $ {prod.item.prize}</div>
                    <div> Subtotal $ {prod.count * prod.item.prize}</div>
                </div>
                <Button className="cartItem_button" variant="secondary" onClick={() => deleteItem(prod.item.id)}>Delete</Button>
            </div>     
        </>
    )
}
