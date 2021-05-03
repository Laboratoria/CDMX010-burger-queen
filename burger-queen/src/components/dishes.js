import React,{useState}  from 'react'

import db from '../firebase'

const Dishes = () =>{

    const [breakfast, setBreakfast] = useState([]);

    const getData = () =>{
        db.collection('desayunos').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
        })
    } 

    return (
        <div>
            <button></button>
        </div>
    )
}

export default Dishes;