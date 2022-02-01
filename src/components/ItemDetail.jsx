// import { faTruckLoading } from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import { Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";



export default function ItemDetail({ producto }) {

// const [counter, setCounter] = useState();
const [showItemCount, setShowItemCount] = useState(true);

const onAdd = (count) => {
    alert(count);
    setShowItemCount(false);
    // setCounter(counter);
    
}

    return (
        <>
       
            <div style={{ margin: "20px" }}>
                {(producto.id) ?
                
                
                    <div>
                        <Card style={{ width: '18rem', align: "center" }}>
                            <Card.Img variant="top" src={producto.img} />
                            <Card.Body>
                                <Card.Title>{producto.product}</Card.Title>
                                <Card.Text>{producto.category}</Card.Text>
                                <Card.Text>{producto.detail}</Card.Text>
                                <Card.Text>Precio{producto.prize}</Card.Text>
                                {/* <Button variant="secondary">Ver detalle</Button> */}
                            </Card.Body>
                            {
                                (showItemCount)?
                                <ItemCount initial={1} stock={5} onAdd={onAdd} />:

                                 <Link to={'/cart'}>
                                 <button>link para terminar compra </button>
                                
                               </Link>

                            }
                            {/* <ItemCount initial={1} stock={5} onAdd={onAdd}/> */}
                        </Card>
                    </div> :
                    <Spinner animation="border" variant="secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                    
                }

            </div>
            
        </>


    )
}

