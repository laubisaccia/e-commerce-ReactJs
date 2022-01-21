import React, { useState, useEffect } from 'react';
import Item from './item';
// import { Card, Button } from 'react-bootstrap'

export default function ItemList() {
    const [product, setPruduct] = useState([]);
    useEffect(() => {

        const ItemList = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve([{ id: 1, product: 'top Brand', category: 'remeras', detail: 'lorem ipsum', prize: '$2000', img: 'https://via.placeholder.com/150' },
                { id: 2, product: 'pant Rules', category: 'pantalones', detail: 'lorem ipsum one', prize: '$8000', img: 'https://via.placeholder.com/150' },
                { id: 3, product: 'top Newbie', category: 'remeras', detail: 'lorem ipsum two', prize: '$3000', img: 'https://via.placeholder.com/150' }])
            }, 2000)
        });

        ItemList
            .then((ItemList) => setPruduct(ItemList))
            .catch((err) => console.log(err));
    }, [])

    return (
        <>
            <div style={{ display: "flex", width:"100%" }}>
                {product.map(item => <Item item={item} />)}

            </div>
        </>


    )
}