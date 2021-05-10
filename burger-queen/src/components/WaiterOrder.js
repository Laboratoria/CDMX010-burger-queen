import React,{useState, useEffect}  from 'react'
import {db} from '../firebase'
import Handle from '../components/Handle'

const WaiterOrder = () => {
    
    
    const [products, setProducts] = useState([]);
    const [items, setItems] = useState();
    const [view, setView] = useState(false);
    const [order, setOrder] = useState([]);
  
    const getDatos =  () => {
        db.collection("productos ").onSnapshot((querySnapshot) => {
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
                    {items[0]}  {items[1]}
                </div> 
            }  
        </div>
    )
};   

export default WaiterOrder;