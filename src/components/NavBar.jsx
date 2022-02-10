import React,{useContext} from "react";
import { Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget";
// import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import '../App.css';
import { cartContext } from "../context/CartProvider";

export default function NavBar() {

    const { sumQuantityTotals } = useContext(cartContext);

    // const [quantityTotal, setQuantityTotal] = useState(0);
    // useEffect(() => {
    //     setQuantityTotal(sumQuantityTotals());
    // },[sumQuantityTotals])

    return (
        <>
        {/* {quantityTotal} */}
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

                                        <LinkContainer to="/cat/remeras">
                                        <Nav.Link href="#">Remeras</Nav.Link>
                                        </LinkContainer>

                                        <LinkContainer to="/cat/accesorios">
                                        <Nav.Link href="#">Accesorios</Nav.Link>
                                        </LinkContainer> 

                                    
                                        {/* <LinkContainer to="/productos">
                                        <Nav.Link >Productos</Nav.Link>
                                        </LinkContainer> */}

                                        <LinkContainer to="/cart">
                                        <Nav.Link >Cart
                                            <CartWidget quantityTotal={sumQuantityTotals()}/>
                                        </Nav.Link>
                                        </LinkContainer>
                                       
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
