import React from 'react'

export default function Handle(props) {

    return (
        <div>  
         <button onClick={()=> props.handleOrder('hola')}>Prueba</button> 
        </div>
    )
}
