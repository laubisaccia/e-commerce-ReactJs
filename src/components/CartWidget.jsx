import React from "react";
//import { useState, useContext, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
//import { cartContext } from "../context/CartProvider";

export default function CartWidget({quantityTotal}) {
    // const { sumQuantityTotals } = useContext(cartContext);
    // const [quantityTotal, SetQuantityTotal]= useState(0);

    return(
        <>
            <FontAwesomeIcon icon={faShoppingCart}/> {quantityTotal}
        </>
    )
}