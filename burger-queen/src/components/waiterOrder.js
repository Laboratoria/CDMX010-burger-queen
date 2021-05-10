import React,{useState, useEffect}  from 'react'
import {db} from '../firebase'


const WaiterOrder = () => {
    
    
    const [products, setProducts] = useState([]);
    const [items, setItems] = useState();
    const [view, setView] = useState(false);

    const getDatos =  () => {
        db.collection("productos").onSnapshot((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id});
        });
        setProducts(docs);
        console.log(docs);
    }); 
    };

    const handlerSelectItems = (product) => {
        setItems([product.nombre, product.precio]);
        setView(true);
    };

    useEffect(()=>{
        getDatos();   
    }, []);     

    return (
        <div> 
            <h1>Desayuno </h1>
            {products.map(product => (
                <button onClick={() => handlerSelectItems(product)}>
                    {product.nombre} {product.precio}
                </button>
            ))}
            {view &&
                <div>
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
                                <td>{items[0]}</td>
                                <td>{items[1]}</td>
                                <td><button class="btn btn-danger">-</button></td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>{items[0]}</td>
                                <td>{items[1]}</td>
                                <td><button class="btn btn-danger">-</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> 
            }
        </div>
    )
};   

export default WaiterOrder;
