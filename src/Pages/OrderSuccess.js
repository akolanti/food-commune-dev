import React, {useState} from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar'
import PaymentSuccess from '../Components/OrderSuccess'

const OrderSuccess = () => {
    const [isOpen,setIsOpen] = useState(false)
    
        const toggle= () => {
            setIsOpen(!isOpen)
        }
    
    return (
        <>
        <Sidebar isOpen= {isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />  
        <PaymentSuccess></PaymentSuccess>
        <Footer />
        </>
    )
}

export default OrderSuccess
