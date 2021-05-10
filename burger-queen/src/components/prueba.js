import React from 'react';

const CustomerOrder = () => {


    return(
        <div className="table-container">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    </tr>
                </tbody>
            </table>
                {/* {products.map((orderItem, index) =>
                    (<tr key={index}>
                        <td><input className="addBtn" value="+" type="button" onClick={()=> onClickAdd(orderItem)}/></td>
                        <td>{orderItem.number}</td>
                        <td>{orderItem.name}</td>
                        <td>${orderItem.price}</td>
                        <td><input className="subBtn" value="-" type="button" onClick={()=> onClickSub(orderItem)}/></td>
                    </tr>
                    )
                )} */}
        </div>
    )
}

export default CustomerOrder;