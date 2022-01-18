import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap'


export default function ItemCount({ initial, stock }) {


    const [count, setCount] = useState(initial);


    const increase = () => {
        if (count < stock) { setCount(count + 1) }
    };

    const decrease = () => {
        if (count > initial) { setCount(count - 1) }
    };
    const add = () => {
       alert(count);
    }
    return (
        <Card style={{ width: '18rem', align: "center" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <div style={{ display: "flex", padding: "0 10px" }}>
                    <Button variant="primary" style={{ width: "30%", padding: "0 10px" }} onClick={decrease}>-</Button>
                    <p style={{ border: "1px solid black", width: "30%", padding: "0 10px", margin: "0" }}>{count}</p>
                    <Button variant="primary" style={{ width: "30%", padding: "0 10px" }} onClick={increase}>+</Button>
                </div>
                <Button variant="primary" style={{ width: "100%", padding: "0 10px" }} onClick={add} >Agregar</Button>
            </Card.Body>
        </Card>
    );
}

