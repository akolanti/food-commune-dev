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
                    <SidebarLink to ="about" onClick= {toggle}>About</SidebarLink>
                    <SidebarLink to ="about" onClick= {toggle} >Discover</SidebarLink>
                    <SidebarLink to ="about" onClick= {toggle} >Services</SidebarLink>
                    <SidebarLink to ="Sign Up" onClick= {toggle} >Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin"> Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
