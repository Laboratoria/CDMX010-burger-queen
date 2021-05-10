import React, {useState, useEffect} from 'react'
import {db} from '../../firebase'
import '../order/order.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Order = (props) =>{

    const initialStateValues = {
        nombre: '',
        precio: '',
    };

    const [order, setOrder] = useState([]);
    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    };

    const handleSubmit = () =>{
        props.addOrEdit(values);
        setValues({...initialStateValues})
    };

    const getNoteById = async (id) =>{
        const doc = await db.collection('order').doc(id).get();
        setValues({...doc.data()});
    }

    useEffect(()=> {
        if (props.modifyId === ''){
            setValues({...initialStateValues})
        }else{
            getNoteById(props.modifyId);
        }
    }, [props.modifyId]);

    return(
        <div className="createorder" onSubmit={handleSubmit}>  
            <div>
                <div>
                    <p onChange={handleInputChange} value={values.nombre}></p>
                </div>
                <div>
                    <p onChange={handleInputChange} value={values.precio}></p>
                </div>
            </div>
        </div>
    )
};

export default Order;
