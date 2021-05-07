import React from 'react'
import { FaBars } from 'react-icons/fa'
import Logo from '../../images/AD-logo.png'
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavBarElements'

const NavBar = ({ toggle }) => {
    return (
      <>
        <Nav>
          <NavBarContainer>
            <NavLogo to='/' src={Logo} />
            <MobileIcon onClick={toggle} >
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='services'>Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='portfolio'>Portfolio</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='contact'>Contact</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/contact'>Let's Talk</NavBtnLink>
            </NavBtn>
          </NavBarContainer>
        </Nav>
      </>
    );
}

export default NavBar
