import React,{useState} from 'react'
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Cart from '../Components/AddToCart'

const AddToCart = () => {

    const [isOpen,setIsOpen] = useState(false)

    const toggle= () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
        <Sidebar isOpen= {isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />  
        <Cart></Cart>
        <Footer></Footer>
        </>
    )
}

export default AddToCart
