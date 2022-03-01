import React from 'react';
import Item from './item';
import { Spinner } from "react-bootstrap";

export default function ItemList({ product, load }) {
    
    return (
        <>
            {(load) ?
                <div style={{ display: "flex", flexWrap:'wrap', width: "100%", marginTop:"7vh",justifyContent:"center" }}>
                    {product.map(item => <Item key={item.id} item={item} />)}
                </div> :
                <Spinner style={{  marginTop:"2vh",margin:"auto" }} animation="border" variant="secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }
        </>
    )
}