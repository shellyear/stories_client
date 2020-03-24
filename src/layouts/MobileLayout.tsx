import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  
`;

interface ILayout {
  children?: React.ReactNode
}

const MobileLayout: React.FC<ILayout> = ({ children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper> 
  );
};

export default MobileLayout;
