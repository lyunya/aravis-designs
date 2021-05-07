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
            <SideBarLink to='services' onClick={toggle}>
              Services
            </SideBarLink>
            <SideBarLink to='portfolio' onClick={toggle}>
              Portfolio
            </SideBarLink>
            <SideBarLink to='contact' onClick={toggle}>
              Let's Talk
            </SideBarLink>
          </SideBarMenu>
        </SideBarWrapper>
      </SideBarContainer>
    );
}

export default SideBar
