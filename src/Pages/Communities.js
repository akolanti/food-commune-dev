import React, {useState} from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar'


const Communities = () => {
    const [isOpen,setIsOpen] = useState(false)
    
    const toggle= () => {
        setIsOpen(!isOpen)
    }

return (
    <>
    <Sidebar isOpen= {isOpen} toggle={toggle}/>
    <Navbar toggle={toggle} />  
    
        <Footer />
        </>
    )
}

export default Communities
