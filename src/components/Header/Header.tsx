import React from 'react'
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    padding-left: 5rem;
    gap: 10rem;
`;

const HeaderSocial = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding-top: 9rem;

    img {width: 25px;}
`;

const HeaderInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const HeaderTitle = styled.h1`
    font-size: 2.5rem;
    padding-top: 5rem;
`;


const Headerp = styled.p``;

const HeaderButton = styled.button`

`

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <HeaderSocial>
          <a href=""><img src="https://img.icons8.com/?size=100&id=DpOQ6G5p47f0&format=png&color=000000" /></a>
          <a href=""><img src="https://img.icons8.com/?size=100&id=BRElTmOLC6Bh&format=png&color=000000" /></a>
          <a href=""><img src="https://img.icons8.com/?size=100&id=12598&format=png&color=000000" /></a>
        </HeaderSocial>
        
        <HeaderInfo>
        <HeaderTitle>Paola de Oliveira 🖐</HeaderTitle>
        <Headerp>oi</Headerp>
        <HeaderButton><button><a href="">Say hello!</a></button></HeaderButton>
        </HeaderInfo>

      </HeaderContainer>
    </div>
  );
};
export default Header