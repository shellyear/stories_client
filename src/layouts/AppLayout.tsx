import React from 'react';
import styled from 'styled-components';
import Header from './header/Header';

const Wrapper = styled.div`
  background: #f6f6f6;
`;

const Container = styled.div`  
  background-color: lightblue;
  margin: 0 auto;
  max-width: 78rem;
  padding: 0 2.5rem;
`;

const Content = styled.div`
  margin-top: 2rem;
`;

const AppLayout: React.FC = ({ 
  children
}) => {
  return (
    <Wrapper>
      <Container>
        <Header />   
        <Content>
          {children}
        </Content>
      </Container>
    </Wrapper>
  );
};

export default AppLayout;