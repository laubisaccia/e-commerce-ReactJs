import React, { useState, useEffect } from 'react';
import ItemList from "./itemList";
import remerasummer from '../aseets/img/remerasummer.jpg'
import remerasmile from '../aseets/img/remerasmile.jpg'
import panuelored from '../aseets/img/panuelored.jpg'
import panueloblue from '../aseets/img/panueloblue.jpg'
import arosRayo from '../aseets/img/arosRayo.jpg'
import { useParams } from 'react-router-dom';

export default function ItemListContainer({ greeting }) {
    const { category } = useParams();
    const [product, setPruduct] = useState([]);
    const [load, setLoad] = useState(false);
// useEffect(()=>{
//     console.log("test"+category);
// },[category])
    
    useEffect(() => {
       
        const ItemList = new Promise((resolve, reject) => {
                 setTimeout(() => {
                     resolve([{ id: '1', product: 'Remera Summer', category: 'remeras', detail: 'lorem ipsum', prize: '$5000', img: remerasummer },
                     { id: '2', product: 'Pañuelo Red', category: 'accesorios', detail: 'lorem ipsum one', prize: '$3000', img: panuelored },
                     { id: '3', product: 'Remera Smile', category: 'remeras', detail: 'lorem ipsum two', prize: '$5000', img: remerasmile },
                     { id: '4', product: 'Pañuelo Blue', category: 'accesorios', detail: 'lorem ipsum two', prize: '$3000', img: panueloblue },
                     { id: '5', product: 'Aros Rayo', category: 'accesorios', detail: 'lorem ipsum two', prize: '$2800', img: arosRayo }])
                 }, 2000)
     
                 
             });
          
             ItemList
                 .then((ItemList) => {
                    if(category ){
                 
                        ItemList=ItemList.filter(item => item.category === category);
                    }
                   
                     setPruduct(ItemList);
                     setLoad(true);
                 })
                 .catch((err) => { console.log(err) });
     
         },[category])


       
    return (
        <>

            <p style={{ width: "100%" }}> {greeting}</p>
            <ItemList product={product} load={load} />
           

        </>


    )}
