import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarWrapper,SideBtnWrap,SidebarRoute,SidebarLink,SidebarMenu} from './SidebarElement'
const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen= {isOpen} onClick={toggle}>
            <Icon onClick= {toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to ="/" onClick= {toggle}>About</SidebarLink>
                    <SidebarLink to ="/list" onClick= {toggle} >Restaurants</SidebarLink>
                    <SidebarLink to ="/community" onClick= {toggle} >Services</SidebarLink>
                 
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin"> Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
