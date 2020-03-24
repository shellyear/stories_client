import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavMenu from 'modules/menu/NavMenu';

const LogoBlock = styled.div`
  height: 20rem;
  width: 10rem;
`;

const Logo = styled.img`
  height: 100%;
  width: 100%;
`;

const MenuBlock = styled.ul`
  max-width: 20rem;
  box-sizing: border-box;
`;

const Container = styled.section`
  background-color: yellow;
  max-height: 50vh;
  max-width: 20rem;
`;

interface ILeft {
  isTablet: boolean
}

const LeftSection: React.FC<ILeft> = memo(({
  isTablet
}) => {
  return (
    <Container>
      <LogoBlock>
        <Logo src='story.png' />
      </LogoBlock>
      {/* <NavMenu /> */}
    </Container>     
  );
});

export default LeftSection;
