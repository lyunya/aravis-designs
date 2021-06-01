import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'


export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? 'transparent' : '#ffffff')};
  height: 100px;
  margin-top: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 3px solid #848b96;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 8px 24px;
  margin: 16px 0;
  max-width: 2800px;
  
`

export const NavLogo = styled.img`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #555555;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 100px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #555555;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #2a527b;
  }
`

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavBtnLink = styled(LinkScroll)`
  border-radius: 50px;
  background: #2a527b;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 1.5rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

`