import React from 'react'
import { MenuData } from '../../Helpers/MenuData'
import { Button } from '../Button/Button'
import {
  CloseIcon,
  DropdownContainer,
  DropdownMenu,
  DropdownWrapper,
  Icon,
  BtnWrap,
  DropdownLink,
} from './Dropdown.elements'

function Dropdown({ toggle, isOpen }) {
  return (
    <>
      <DropdownContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <DropdownWrapper>
          <DropdownMenu>
            {MenuData.map((item, index) => (
              <DropdownLink to={item.link} key={index}>
                {item.title}
              </DropdownLink>
            ))}
          </DropdownMenu>
          <BtnWrap>
            <Button primary='true' round='true' big='true' to='/contact'>
              Contact Us
            </Button>
          </BtnWrap>
        </DropdownWrapper>
      </DropdownContainer>
    </>
  )
}

export default Dropdown
