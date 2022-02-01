import React, { useState } from 'react';
import {  Button } from 'react-bootstrap'


export default function ItemCount({ initial, stock, onAdd }) {

    const [count, setCount] = useState(initial);

    const increase = () => {
        if (count < stock) { setCount(count + 1) }
    };

    const decrease = () => {
        if (count > initial) { setCount(count - 1) }
    };
    
    return (


        <div >

            <div style={{ display: "flex", width: "100%", flexDirection: "row" }}>
                <Button variant="primary" style={{ width: "30%", padding: "0 10px" }} onClick={decrease}>-</Button>
                <p style={{ border: "1px solid black", width: "30%", padding: "0 10px", margin: "0" }}>{count}</p>
                <Button variant="primary" style={{ width: "30%", padding: "0 10px" }} onClick={increase}>+</Button>
            </div>

            <div>
                <Button variant="primary" style={{ width: "90%", padding: "0 10px" }} onClick={()=>onAdd(count)} >Agregar</Button>
            </div>

        </div>

    );
}

