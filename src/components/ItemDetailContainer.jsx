import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import remerasummer from '../aseets/img/remerasummer.jpg'
import remerasmile from '../aseets/img/remerasmile.jpg'
import panuelored from '../aseets/img/panuelored.jpg'
import panueloblue from '../aseets/img/panueloblue.jpg'

export default function ItemDetailContainer() {

    const { itemId } = useParams();
    const [producto, setProducto] = useState({});


    useEffect(() => {

        const ItemDetail = new Promise((resolve, reject) => {
            setTimeout(() => {

                let productList = [{ id: '1', product: 'Remera Summer', category: 'remeras', detail: 'lorem ipsum', prize: '$5000', img: remerasummer },
                { id: '2', product: 'Pañuelo Red', category: 'accesorios', detail: 'lorem ipsum one', prize: '$3000', img: panuelored },
                { id: '3', product: 'Remera Smile', category: 'remeras', detail: 'lorem ipsum two', prize: '$5000', img: remerasmile },
                { id: '4', product: 'Pañuelo Blue', category: 'accesorios', detail: 'lorem ipsum two', prize: '$3000', img: panueloblue }];
                
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