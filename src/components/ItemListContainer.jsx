import React from "react";
import ItemList from "./itemList";

export default function ItemListContainer({greeting}) {
    
    return(
        <>
        <p style={{width:"100%"}}> {greeting}</p>
            <div style={{display:"flex"}}>
                
                <ItemList />
            </div>
        </>
            
        
    )
}