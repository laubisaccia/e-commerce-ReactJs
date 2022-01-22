import React, { useState, useEffect } from 'react';
import ItemList from "./itemList";

export default function ItemListContainer({greeting}) {
    const [product, setPruduct] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {

        const ItemList = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve([{ id: 1, product: 'top Brand', category: 'remeras', detail: 'lorem ipsum', prize: '$2000', img: 'https://via.placeholder.com/150' },
                { id: 2, product: 'pant Rules', category: 'pantalones', detail: 'lorem ipsum one', prize: '$8000', img: 'https://via.placeholder.com/150' },
                { id: 3, product: 'top Newbie', category: 'remeras', detail: 'lorem ipsum two', prize: '$3000', img: 'https://via.placeholder.com/150' }])
            }, 2000)
        });

        ItemList
            .then((ItemList) => {
                setPruduct(ItemList);
                setLoad(true);


            })
            .catch((err) => { console.log(err) });

    },[])
    return(
        <>
       
        <p style={{width:"100%"}}> {greeting}</p>
            {/* <div style={{display:"flex"}}> */}
                <ItemList product={product} load={load}/>
            {/* </div> */}
            
        </>
            
        
    )
}