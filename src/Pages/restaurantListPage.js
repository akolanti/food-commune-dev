import React, {useState} from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Completepage from '../Components/RestaurantList/Completepage'
import Sidebar from '../Components/Sidebar'
const RestaurantListPage = () => {

    const [isOpen,setIsOpen] = useState(false)

    const toggle= () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
        <Sidebar isOpen= {isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />  
        <Completepage />
        <Footer></Footer>
        </>
    )
}

export default RestaurantListPage
