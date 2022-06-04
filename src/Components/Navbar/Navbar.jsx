import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import { useMetamask } from "use-metamask";
import { providers } from "ethers";
import { useState } from "react";



const Navbar = ({ toggle }) => {
    const { disconnect, connect, metaState } = useMetamask();
    
    
    const web3 = metaState.web3;
    const account = metaState.account[0];
  return (
    
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>ARX</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              
            </NavItem>
            <NavItem>
              
            </NavItem>
            <NavItem>
              
            </NavItem>
          </NavMenu>
          <NavBtn>
          {!metaState.isConnected || !web3 || !account ? (<NavBtnLink onClick={() => connect(providers.Web3Provider)}>Connect Wallet</NavBtnLink>) : (
            <NavBtnLink onClick={() => disconnect(providers.Web3Provider)}>{account}</NavBtnLink>
          )}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar