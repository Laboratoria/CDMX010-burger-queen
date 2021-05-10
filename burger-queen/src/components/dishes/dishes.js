import React,{useState}  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../dishes/dishes.css';
// import db from '../firebase'

const Dishes = () =>{

    // const [breakfast, setBreakfast] = useState([]);

    // const getData = () =>{
    //     db.collection('desayunos').get().then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             console.log(`${doc.id} => ${doc.data()}`);
    //         });
    //     })
    // } 

    return (
        <div>
            <button className='btn btn-info btn-lg'>Café americano <br/> $5</button> 
        </div>
    )
}

export default Dishes;