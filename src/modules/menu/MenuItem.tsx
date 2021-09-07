import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Container = styled.li`
  width: 100%;
  min-width: 100px;
`;

const StyledLink = styled(Link)`
  display: block;

`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
`;

const Text = styled.p`
  text-align: left;
`;

interface IMenuItem {
  text: string,
  iconSrc: string,
  path: string,
}

const MenuItem: React.FC<IMenuItem> = ({ 
  text, 
  iconSrc,
  path 
}) => {
  return (
    <Container>
      <StyledLink to={path} replace={true}>
        <Icon src={iconSrc}/>
        <Text>{text}</Text>
      </StyledLink>
    </Container>    
  );
};

export default MenuItem;
