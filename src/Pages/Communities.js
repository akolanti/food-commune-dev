import React, {useState} from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar'
import ChatComponent from '../Components/Communities'

const Communities = () => {
    const [isOpen,setIsOpen] = useState(false)
    
    const toggle= () => {
        setIsOpen(!isOpen)
    }

return (
    <>
    <Sidebar isOpen= {isOpen} toggle={toggle}/>
    <Navbar toggle={toggle} />  
    <ChatComponent></ChatComponent>
        <Footer />
        </>
    )
}

export default Communities
