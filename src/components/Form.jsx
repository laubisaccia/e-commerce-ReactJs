import React, { useState, useRef, useContext } from "react";
import firebase from "firebase";
import { getFirestore } from '../firebase/firebase'
import { cartContext } from "../context/CartProvider";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Form() {
    const { cart, sumTotals, clearCart } = useContext(cartContext);
    const [orderId, setOrderId] = useState('');

    const nameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();

    function handleClick(event) {
        event.preventDefault();
        const db = getFirestore();
        const orders = db.collection("orders");

        const miOrden = {
            buyer: {
                name: nameRef.current.value,
                address: addressRef.current.value,
                city: cityRef.current.value,
                state: stateRef.current.value,
                email: emailRef.current.value,
                mobile: mobileRef.current.value,
            },
            items: cart,
            total: sumTotals(),
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        orders.add(miOrden)
            .then(({ id }) => {
                console.log('orden ingresada: ' + id);
                setOrderId(id);
            })
            .catch((err) => {
                console.log(err);
            });

    }
    console.log(orderId)
    return (
        (orderId === "") ?
            <>
                <form className="form-container" onSubmit={handleClick}>
                    <h3>Ingresa tus datos:</h3>

                    <input className="form-container__input" type="text" name="name" ref={nameRef} placeholder="Nombre y Apelllido" required />
                    <input className="form-container__input" type="text" name="mobile" ref={mobileRef} placeholder="Nro de Celular" required />
                    <input className="form-container__input" type="email" name="email" ref={emailRef} placeholder="Email" required />
                    <input className="form-container__input" type="text" name="state" ref={stateRef} placeholder="Provincia" required />
                    <input className="form-container__input" type="text" name="city" ref={cityRef} placeholder="Ciudad" required />
                    <input className="form-container__input" type="text" name="address" ref={addressRef} placeholder="Direccion" required />
                    <Button variant="secondary" type="submit" >ok!</Button>
                </form>

            </> :
            <>
                <div className="form-container__confirm">
                        {orderId && (<h3>Felicitaciones tu order es {orderId}</h3>)}
                    <Link to="/"><Button variant="secondary" onClick={clearCart}>Ir al Inicio</Button></Link>
                </div>
            </>

    );
}