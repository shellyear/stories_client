import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { H4 } from 'styles/typography';
import Menu from './Menu';


const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 1rem;
`;

const LogoWrapper = styled(Link)`
  display: block;
  text-decoration: none;
  width: 16rem;
  user-select: none;
`;

const Logo = styled.img`
  width: 100%;
  height: 9rem;
`;

const LogoText = styled.h1`
  ${H4}
  font-family: 'Pacifico', cursive;
  text-align: center;
  color: var(--main);
`;

const RightBar = styled.div`
  padding-top: 2rem;
`;

function Header() {
  return (
    <Wrapper>
      <LogoWrapper to='/'>
        <Logo src='/logo.png' />
        <LogoText>Odposlechnuto</LogoText>
      </LogoWrapper>
      <RightBar>
        <Menu />
      </RightBar>
    </Wrapper>
  );
};

export default Header;
