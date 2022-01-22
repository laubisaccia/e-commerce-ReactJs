import React from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget";
import '../App.css';

export default function NavBar() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Navbar bg="light" expand="lg" >
                            <Container>
                                <Navbar.Brand href="#home">My e-commerce</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="#home">Home</Nav.Link>
                                        <Nav.Link href="#link">About</Nav.Link>
                                        <Nav.Link href="#link">Productos</Nav.Link>
                                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                                <CartWidget />
                            </Container>
                        </Navbar>


                    </div>
                </div>
            </div>
        </>
    )
}
