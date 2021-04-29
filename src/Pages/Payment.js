import React, {useState} from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import PaymentPage from '../Components/PaymentPage'

const Payment = () => {

        const [isOpen,setIsOpen] = useState(false)
    
        const toggle= () => {
            setIsOpen(!isOpen)
        }
    
    return (
        <>
        <Sidebar isOpen= {isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />  
        <PaymentPage></PaymentPage>
        <Footer></Footer>
        </>
    )
}

export default Payment
