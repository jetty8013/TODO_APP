import styled from "styled-components";
import React from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearch } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'

const NavWrapper = styled.div`
position: relative;
display: flex;
justify-content: flex-end;
align-items: center;
width: 390px;
height: 56px;
top: 44px;
background: #E5E5EA;
`

const NavIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-right: 16px;
  cursor: pointer;
`

function Nav() {

  return(
    <>
      <NavWrapper>
        <NavIcons><BiSearch size={24} /></NavIcons>
        <NavIcons><AiOutlineHeart size={24} /></NavIcons>
        <NavIcons><GiHamburgerMenu size={24} /></NavIcons>
      </NavWrapper>
    </>
  )
}

export default Nav;