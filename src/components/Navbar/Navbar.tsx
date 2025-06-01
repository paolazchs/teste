import React from 'react'
import styled from 'styled-components'

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 10rem;
`
const NavbarLogo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`
const NavbarLinks = styled.div`
    display: flex;
    gap: 2rem;
    font-size: 1.1rem;
`
const NavbarLink = styled.a`
    text-decoration: none;
    color: black;
`

const Navbar = () => {
  return (
    <NavbarContainer>
        <NavbarLogo>paolaOliveira</NavbarLogo>
        <NavbarLinks>
            <NavbarLink href="#home">Home</NavbarLink>
            <NavbarLink href="#about">About</NavbarLink>
            <NavbarLink href="#skills">Skills</NavbarLink>
            <NavbarLink href="#qualification">Qualification</NavbarLink>
            <NavbarLink href="#contact">Contact</NavbarLink>
        </NavbarLinks>
    </NavbarContainer>
  )
}

export default Navbar