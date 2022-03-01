import React, { useState, useEffect } from 'react';
import { getFirestore } from '../firebase/firebase'
import ItemList from "./itemList";
import { useParams } from 'react-router-dom';

export default function ItemListContainer({ greeting }) {
    const { category } = useParams();
    const [product, setPruduct] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {

        const db = getFirestore();
        let itemCollection;
        if (category) {
            itemCollection = db.collection('items').where('category', '==', category)
        } else {
            itemCollection = db.collection('items')
        }

        itemCollection
            .get()
            .then((querySnapShot) => {
                let prod = querySnapShot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                setPruduct(prod);
                setLoad(true);

            })
      
        .catch((err) => {
            console.log(err);
        })
}, [category])

return (
    <>
        <div className='itemListContainer-greeting'> {greeting}</div>
        <ItemList product={product} load={load} />  
    </>
 

)
}
