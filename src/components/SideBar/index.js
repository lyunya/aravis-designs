import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink } from './SideBarElements'

const SideBar = ({ isOpen, toggle }) => {
    return (
      <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SideBarMenu>
            <SideBarLink to='services' onClick={toggle} offset={-80}>
              Services
            </SideBarLink>
            <SideBarLink to='portfolio' onClick={toggle} offset={-80}>
              Portfolio
            </SideBarLink>
            <SideBarLink to='contact' onClick={toggle} offset={-80}>
              Let's Talk
            </SideBarLink>
          </SideBarMenu>
        </SideBarWrapper>
      </SideBarContainer>
    )
}

export default SideBar
