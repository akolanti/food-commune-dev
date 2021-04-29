import React, { useState ,useEffect,lazy,Suspense} from 'react'
import Footer from '../Components/Footer'

import Navbar from '../Components/Navbar'

import Sidebar from '../Components/Sidebar'
import axios from "axios"

import {
   
    useParams
  } from "react-router-dom";
import RestaurantDataDisplay from '../Components/ResaurantDataDisplay'
// import Products from '../Components/Products'
const Products =lazy(()=>import ('../Components/Products'))

// import { Suspense } from 'react-is'

export const RestuarantDescription = () => {

    const [isOpen,setIsOpen] = useState(false)
    let { id } = useParams();

    const [restot,setRest]=useState([]);
    useEffect(()=>{
       axios.get(`http://localhost:3000/api/get_single_res/${id}`)
       .then(response => {
           setRest(response.data);
           console.log(response.data);
       })
    },[]);
    
    const toggle= () => {
        setIsOpen(!isOpen)
        
    }

    return (
        <>
          <Sidebar isOpen= {isOpen} toggle={toggle}/>
          <Navbar toggle={toggle} /> 
          <Suspense fallback={<div>Loading...</div>}> 
          <RestaurantDataDisplay res={restot} ></RestaurantDataDisplay>
                 <Products heading= 'Menu' res={restot}  id={id}></Products>
          </Suspense>

        <Footer></Footer>

        </>
    )
}
