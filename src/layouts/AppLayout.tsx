import React, { useContext } from 'react';
import styled from 'styled-components';
import BaseLayout from './BaseLayout';
import MobileLayout from './MobileLayout';
import { LayoutContext } from 'constants/context';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
`;


const AppLayout: React.FC = ({ 
  children
}) => {
  const { isBase, isMobile, isTablet } = useContext(LayoutContext);
  return (
    <>
      {isBase && 
        <BaseLayout isTablet={isTablet}>
          {children}
        </BaseLayout>
      }

      {isMobile &&
        <MobileLayout>
          {children}
        </MobileLayout>
      }
    </>
  );
};

export default AppLayout;