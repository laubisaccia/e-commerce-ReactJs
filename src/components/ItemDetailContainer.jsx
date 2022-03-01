import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getFirestore } from '../firebase/firebase'

export default function ItemDetailContainer() {

  const { itemId } = useParams();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    //en este caso recibo el param, pero podria buscar con un id especifico
    const miItem = itemCollection.doc(itemId);

    miItem.get()
      .then((doc) => {
        if (!doc.exists) {
          console.log('no existe ese documento');
          return
        }

        setProducto({ id: doc.id, ...doc.data() });

      })
      .catch((err) => {
        console.log(err);
      })
  }, [itemId])

  return (
    <>
      <div className='itemDetailContainer-container'>
        <ItemDetail producto={producto} />
      </div>
    </>
  )
}