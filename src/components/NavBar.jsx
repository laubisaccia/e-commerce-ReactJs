import React, { useContext } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget";
import { LinkContainer } from "react-router-bootstrap";
import '../App.css';
import { cartContext } from "../context/CartProvider";

export default function NavBar() {

    const { sumQuantityTotals } = useContext(cartContext);

    return (
        <>
            <div >
                <div className="row ">
                    <div className="col ">
                        <Navbar fixed="top" bg="light" expand="lg" >
                            <Container style={{ margin: 0 }} >
                                <LinkContainer to="/">
                                    <Navbar.Brand href="#home">M D T</Navbar.Brand>
                                </LinkContainer>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto " >

                                        <div style={{ display: "flex" }}>
                                            <LinkContainer to="/cat/remeras">
                                                <Nav.Link href="#">Remeras</Nav.Link>
                                            </LinkContainer>

                                            <LinkContainer to="/cat/accesorios">
                                                <Nav.Link href="#">Accesorios</Nav.Link>
                                            </LinkContainer>
                                        </div>

                                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                                            <LinkContainer to="/cart">
                                                <Nav.Link >Cart
                                                    <CartWidget quantityTotal={sumQuantityTotals()} />
                                                </Nav.Link>
                                            </LinkContainer>
                                        </div>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                </div>
            </div>
        </>
    )
}
