import React from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import '../App.css';

export default function NavBar() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Navbar bg="light" expand="lg" >
                            <Container>
                          <LinkContainer to="/">
                                <Navbar.Brand href="#home">M D T</Navbar.Brand>
                                </LinkContainer>

                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        {/* <LinkContainer to="/home">
                                        <Nav.Link href="#home">Home</Nav.Link>
                                        </LinkContainer> */}

                                        <LinkContainer to="/remeras">
                                        <Nav.Link href="#">Remeras</Nav.Link>
                                        </LinkContainer>

                                        {/* <LinkContainer to="/accesorios">
                                        <Nav.Link href="#accesorios">Accesorios</Nav.Link>
                                        </LinkContainer> */}

                                    
                                        <LinkContainer to="/productos">
                                        <Nav.Link >Productos</Nav.Link>
                                        </LinkContainer>
                                       
                                        
                                        
                                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown> */}
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
