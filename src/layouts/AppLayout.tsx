import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ theme }) => theme.background};

  /* Sticky footer */
  /* @media all and (max-width: 659px) {
    margin-top: 60px;
  } */
`;


const AppLayout: React.FC = (props): JSX.Element => {
  const { children } = props;

  return (
    <>
      <Container>
        {/* <Header /> */}
        <main role="main">{children}</main>
        {/* <CookieNotice /> */}
        {/* <Footer /> */}
      </Container>
    </>
  );
};