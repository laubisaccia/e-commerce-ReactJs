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


        <div style={{ display: "flex", padding: "0 10px", width: "30%", flexDirection: "column" }}>

            <div style={{ display: "flex", width: "100%", flexDirection: "row" }}>
                <Button variant="primary" style={{ width: "30%", padding: "0 10px" }} onClick={decrease}>-</Button>
                <p style={{ border: "1px solid black", width: "30%", padding: "0 10px", margin: "0" }}>{count}</p>
                <Button variant="primary" style={{ width: "30%", padding: "0 10px" }} onClick={increase}>+</Button>
            </div>

            <div>
                <Button variant="primary" style={{ width: "90%", padding: "0 10px" }} onClick={add} >Agregar</Button>
            </div>

        </div>

    );
}

