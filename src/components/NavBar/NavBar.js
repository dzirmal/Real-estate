import React, { useEffect, useState } from 'react'
import { MenuData } from '../../Helpers/MenuData'
import { Button } from '../Button/Button'
import {
  Logo,
  Nav,
  MenuBars,
  NavMenu,
  NavMenuLinks,
  NavBtn,
} from './NavBar.elements'

function NavBar({ toggle }) {
  const [navbar, setNavBar] = useState(false)

  useEffect(() => {
    const changeBackground = () => {
      window.scrollY >= 360 ? setNavBar(true) : setNavBar(false)
    }
    window.addEventListener('scroll', changeBackground)
  }, [navbar])

  return (
    <>
      <Nav active={navbar}>
        <Logo to='/'>Logo</Logo>
        <MenuBars onClick={toggle} />
        <NavMenu>
          {MenuData.map((item, index) => (
            <NavMenuLinks to={item.link} key={index}>
              {item.title}
            </NavMenuLinks>
          ))}
        </NavMenu>
        <NavBtn>
          <Button to='/contacts' primary='true'>
            Contact Us
          </Button>
        </NavBtn>
      </Nav>
    </>
  )
}

export default NavBar
