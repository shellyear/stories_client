import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';

const List = styled.ul`
  
  padding: 0;
  margin: 0;
`;


const Container = styled.nav`

`;

const NavMenu: React.FC = () => {
  return (
    <Container>
      <List>
        <MenuItem path="/" iconSrc="story.png" text="home" />
        <MenuItem path="/share" iconSrc="story.png" text="share story" />
        <MenuItem path="/profile" iconSrc="story.png" text="profile" /> 
      </List>
    </Container>
  );
};

export default NavMenu;
