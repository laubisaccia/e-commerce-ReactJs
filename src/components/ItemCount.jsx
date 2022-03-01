import React, { useState } from 'react';
import { Button } from 'react-bootstrap'


export default function ItemCount({ initial, stock, onAdd }) {

    const [count, setCount] = useState(initial);

    const increase = () => {
        if (count < stock) { setCount(count + 1) }
    };

    const decrease = () => {
        if (count > initial) { setCount(count - 1) }
    };

    return (

        <div className='itemCount_container '>

            <div style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-around" }}>
                <Button variant="secondary" style={{ width: "20%", padding: "0 10px" }} onClick={decrease}>-</Button>
                <p style={{ border: "1px solid black", width: "20%", padding: "0 10px", margin: "0" }}>{count}</p>
                <Button variant="secondary" style={{ width: "20%", padding: "0 10px" }} onClick={increase}>+</Button>
            </div>

            <div style={{ width: "100%", display: "flex", justifyContent: "center", margin: "auto" }}>
                <Button variant="secondary" style={{ width: "50%", padding: "0 10px", margin: "10px 0" }} onClick={() => onAdd(count)} >Agregar </Button>
            </div>

        </div>
    );
}

