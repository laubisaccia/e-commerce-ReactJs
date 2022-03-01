import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function CartWidget({quantityTotal}) {

    return(
        <>
            <FontAwesomeIcon icon={faShoppingCart}/> {quantityTotal}
        </>
    )
}