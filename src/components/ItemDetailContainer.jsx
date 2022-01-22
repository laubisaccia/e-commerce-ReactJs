import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {

    const { itemId } = useParams();
    const [producto, setProducto] = useState({});


    useEffect(() => {

        const ItemDetail = new Promise((resolve, reject) => {
            setTimeout(() => {

                let productList = [{ id: '1', product: 'top Brand', category: 'remeras', detail: 'lorem ipsum', prize: '$2000', img: 'https://via.placeholder.com/150' },
                { id: '2', product: 'pant Rules', category: 'pantalones', detail: 'lorem ipsum one', prize: '$8000', img: 'https://via.placeholder.com/150' },
                { id: '3', product: 'top Newbie', category: 'remeras', detail: 'lorem ipsum two', prize: '$3000', img: 'https://via.placeholder.com/150' }];
                productList = productList.filter(item => item.id === itemId)
                let myProduct = productList[0]
                setProducto(myProduct)
            }, 2000)
        });

        ItemDetail
            .then((ItemDetail) => {
                setProducto(ItemDetail);
               
            })
            .catch((err) => { console.log(err) });

    }, [itemId])
    return (
        <>
            {/* {itemId} */}
            {/* <ItemList product={product} load={load}/> */}
            <ItemDetail producto={producto} />

        </>


    )
}