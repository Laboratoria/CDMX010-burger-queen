import React from 'react'
// import Dishes from './dishes/dishes'
import WaiterOrder from './waiterOrder'

const Menu = () =>{
    return (
        <div>
            <div className='breakfast'>
                <h1>DESAYUNOS</h1>
                <WaiterOrder/>
            </div>
            <div className='dinner'>
                <h1>ALMUERZO Y CENA</h1>
                {/* <Dishes/> */}
            </div>
        </div>
    )
}

export default Menu;