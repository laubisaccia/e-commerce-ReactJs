import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Item({ item }) {

    return (
        <>
            <div style={{ margin: "20px" }}>
                {/* <h1>testing</h1>
                <img src={item.img} alt='pic' />
                <p>{item.name}</p> */}
                <div>
                    <Card style={{ width: '18rem', align: "center" }}>
                        <Card.Img variant="top" src={item.img} />
                        <Card.Body>
                            <Card.Title>{item.product}</Card.Title>
                            <Card.Text>{item.category}</Card.Text>
                            {/* <Card.Text>{item.detail}</Card.Text> */}
                            <Card.Text>Precio{item.prize}</Card.Text>
                            <Link to={`/productos/${item.id}`}>
                            <Button variant="secondary" >Ver detalle</Button>
                            </Link>
                        </Card.Body>

                    </Card>
                </div>
            </div>
        </>


    )
}