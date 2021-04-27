import React, { useState ,useEffect} from 'react'
import Restuarents from './Restuarents'
import axios from "axios"
const RestuarentList = () => {
    const [restot,setRest]=useState([]);
     useEffect(()=>{
        axios.get(`http://localhost:3000/api/restaurant_list`)
        .then(response => {
            setRest(response.data.data);
            console.log(response.data.data);
        })
     },[]);
  return (
    <div className="container-fluid d-flex justify-content-center">
    <div className="row">
        {restot && restot.map((rest)=>(
             <Restuarents key={rest._id} Resto={rest}/>
        ))}
       
    </div>
    
</div>
  )
}

export default RestuarentList

