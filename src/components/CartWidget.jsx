import React from "react";
//import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function CartWidget() {
    return(
        <>
            <FontAwesomeIcon icon={faShoppingCart}/>
        </>
    )
}