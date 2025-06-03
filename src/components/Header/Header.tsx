import styled from 'styled-components';

/*comentários de ajuda*/ 

const HeaderContainer = styled.div`
    display: flex;
    padding-left: 5rem;
    gap: 10rem;
    justify-content: center;
    align-items: center;
`;

const HeaderSocial = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    position: fixed;/* Fixa os ícones na tela, eles não se movem com o scroll */
    top: 50%;                    /* Move o topo do elemento até 50% da altura da tela (meio vertical) */
    left: 4rem;                  /* Mantém o elemento afastado 2rem da lateral esquerda da tela */
    transform: translateY(-50%); /* Move o elemento para cima em 50% da sua própria altura, 
                                    para que ele fique exatamente centralizado verticalmente */

    img {width: 25px;}
`;

const HeaderInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
    
`

const HeaderTitle = styled.h1`
    font-size: 2.5rem;
    padding-top:6rem; 
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
        <HeaderTitle>Paola de Oiveira 🖐</HeaderTitle>
        <Headerp>oi</Headerp>
        <HeaderButton>Say hello!</HeaderButton>
        </HeaderInfo>

      </HeaderContainer>
    </div>
  );
};
export default Header