import React from 'react'

const Button =() =>{ 

    const {handleOrder} = this.props;

    return (
        <div>
            <button 
                value={order}
                className='btn btn-warning btn-lg'
                onClick={handleOrder(item)}
                >
                {item.nombre}
                <br/>
                {item.precio}
            </button> 
        </div>
    )
}

export default Button;