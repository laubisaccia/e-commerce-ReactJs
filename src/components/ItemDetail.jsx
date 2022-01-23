// import { faTruckLoading } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Card, Spinner } from "react-bootstrap";
import ItemCount from "./ItemCount";



export default function ItemDetail({ producto }) {

    return (
        <>
            <div style={{ margin: "20px" }}>
                {(producto.id) ?
                    <div>
                        <Card style={{ width: '18rem', align: "center" }}>
                            <Card.Img variant="top" src={producto.img} />
                            <Card.Body>
                                <Card.Title>{producto.product}</Card.Title>
                                <Card.Text>{producto.category}</Card.Text>
                                <Card.Text>{producto.detail}</Card.Text>
                                <Card.Text>Precio{producto.prize}</Card.Text>
                                {/* <Button variant="secondary">Ver detalle</Button> */}
                            </Card.Body>
                            <ItemCount initial={1} stock={5}/>
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