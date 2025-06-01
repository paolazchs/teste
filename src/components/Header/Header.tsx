import React from 'react'
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12rem;
    padding-left: 5rem;
    gap: 10rem;
`;

const HeaderSocial = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    img {width: 30px;}
`;

const HeaderTitle = styled.h1`
    font-size: 2.5rem;
    text-align: center;
`;


const Headerp = styled.p``;

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <HeaderSocial>
          <img src="https://img.icons8.com/?size=100&id=DpOQ6G5p47f0&format=png&color=000000" />
          <img src="https://img.icons8.com/?size=100&id=BRElTmOLC6Bh&format=png&color=000000" />
          <img src="https://img.icons8.com/?size=100&id=12598&format=png&color=000000" />
        </HeaderSocial>

        <HeaderTitle>Paola de Oliveira 🖐</HeaderTitle>
      </HeaderContainer>

      <Headerp></Headerp>
    </div>
  );
};
export default Header