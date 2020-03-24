import React, { memo } from 'react';
import styled from 'styled-components';
import { LeftSection, RightSection, MainSection } from 'components/_base';
import { LayoutContext } from 'constants/context';

 //maxWidth of base is 1225px
const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 1225px;
  min-width: 100%;
`;

interface ILayout {
  isTablet: boolean,
  children?: React.ReactNode
};

const BaseLayout: React.FC<ILayout> = memo(({ isTablet, children }) => {
  return (
    <Wrapper>
      <LeftSection isTablet={isTablet}/>
      <MainSection>
        {children}
      </MainSection>
      {!isTablet &&
        <RightSection />
      }
    </Wrapper>
  );
});

export default BaseLayout;
