// import { faTruckLoading } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useContext } from "react";
import { Card, Spinner, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { cartContext } from '../context/CartProvider';

export default function ItemDetail({ producto }) {

    const { addToCart } = useContext(cartContext);
    const [showItemCount, setShowItemCount] = useState(true);

    const onAdd = (count) => {
        addToCart(producto, count);
        setShowItemCount(false);
    }

    return (
        <>
            <div style={{ margin: "20px", marginTop: "7vh" }}>
                {(producto.id) ?

                    <div>
                        <Card style={{ width: '18rem', align: "center" }}>
                            <Card.Img variant="top" src={producto.img} />
                            <Card.Body>
                                <Card.Title>{producto.product}</Card.Title>
                                <Card.Text>{producto.category}</Card.Text>
                                <div style={{ fontSize: "12px" }}><b>DESCRIPCION</b></div>
                                <Card.Text>{producto.detail}</Card.Text>
                                <Card.Text>${producto.prize}</Card.Text>
                            </Card.Body>
                            {
                                (showItemCount) ?
                                    <ItemCount initial={1} stock={5} onAdd={onAdd} /> :

                                    <Link to={'/cart'} className="card_button">
                                        <Button variant="secondary" >Terminar mi compra</Button>
                                    </Link>
                            }
                        </Card>
                    </div> :
                    <Spinner animation="border" variant="secondary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                }

            </div>

        </>


    )
}

