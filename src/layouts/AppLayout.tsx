import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
`;


const AppLayout: React.FC = (props): JSX.Element => {
  const { children } = props;

  return (
    <>
      <Container>
        {/* <Media queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 1200px)"
          }}>
          {matches => (
            <Fragment>
              {matches.small && <MobileLayout><RouteContainer></MobileLayout>}
              {matches.medium && <DesktopLayout><RouteContainer></DesktopLayout>}
              {matches.large && <DesktopLayout><RouteContainer></DesktopLayout>}
            </Fragment>
          )}
        </Media> */}
        {/* <Header /> */}
        <main role="main">{children}</main>
        {/* <CookieNotice /> */}
      </Container>
    </>
  );
};