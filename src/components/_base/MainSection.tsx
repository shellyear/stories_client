import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  
`;

interface MainSection {
  children?: React.ReactNode
};

const MainSection: React.FC<MainSection> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default MainSection;
