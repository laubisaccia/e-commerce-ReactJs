import React from 'react';
import Item from './item';
// import { Card, Button } from 'react-bootstrap'
import { Spinner } from "react-bootstrap";

export default function ItemList({ product, load }) {
    
    return (
        <>
            {(load) ?
                <div style={{ display: "flex", flexWrap:'wrap', width: "100%" }}>
                    {product.map(item => <Item key={item.id} item={item} />)}

                </div> :
                <Spinner animation="border" variant="secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }
        </>


    )
}